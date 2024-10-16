const mineflayer = require('mineflayer');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let bot = null;

function createBot(host, port, username) {
    bot = mineflayer.createBot({
        host: host,
        port: port,
        username: username
    });

    bot.on('spawn', () => {
        console.log('Bot spawned');
    });

    bot.on('error', (err) => {
        console.error('Error:', err);
    });
}

app.post('/connect', (req, res) => {
    const { host, port, username } = req.body;
    createBot(host, port, username);
    res.json({ status: 'connected' });
});

app.post('/jump', (req, res) => {
    if (bot) {
        bot.setControlState('jump', true);
        setTimeout(() => bot.setControlState('jump', false), 250);
        res.json({ status: 'jumped' });
    } else {
        res.status(400).json({ error: 'Bot not connected' });
    }
});

app.post('/strafe', (req, res) => {
    if (bot) {
        const { direction, duration } = req.body;
        bot.setControlState('jump', true);
        bot.setControlState(direction, true);
        setTimeout(() => {
            bot.setControlState('jump', false);
            bot.setControlState(direction, false);
        }, duration);
        res.json({ status: 'strafed' });
    } else {
        res.status(400).json({ error: 'Bot not connected' });
    }
});

app.post('/move', (req, res) => {
    if (bot) {
        const { direction, blocks } = req.body;
        bot.setControlState(direction, true);
        setTimeout(() => {
            bot.setControlState(direction, false);
        }, blocks * 250); // Assuming 1 block takes about 250ms to traverse
        res.json({ status: 'moving' });
    } else {
        res.status(400).json({ error: 'Bot not connected' });
    }
});

app.post('/place_block', (req, res) => {
    if (bot) {
        const referenceBlock = bot.blockAt(bot.entity.position.offset(0, -1, 0));
        bot.placeBlock(referenceBlock, mineflayer.vec3(0, 1, 0))
            .then(() => res.json({ status: 'block placed' }))
            .catch(err => res.status(400).json({ error: err.message }));
    } else {
        res.status(400).json({ error: 'Bot not connected' });
    }
});

app.post('/break_block', (req, res) => {
    if (bot) {
        const block = bot.blockAt(bot.entity.position.offset(0, -1, 0));
        bot.dig(block)
            .then(() => res.json({ status: 'block broken' }))
            .catch(err => res.status(400).json({ error: err.message }));
    } else {
        res.status(400).json({ error: 'Bot not connected' });
    }
});

app.post('/change_block', (req, res) => {
    if (bot) {
        const { inventory_index_place } = req.body;
        bot.setQuickBarSlot(inventory_index_place);
        res.json({ status: 'block changed' });
    } else {
        res.status(400).json({ error: 'Bot not connected' });
    }
});

app.get('/quick_hand', (req, res) => {
    if (bot) {
        const quickBar = {};
        for (let i = 0; i < 9; i++) {
            const item = bot.inventory.slots[bot.inventory.hotbarStart + i];
            if (item) {
                quickBar[i] = item.name;
            }
        }
        res.json(quickBar);
    } else {
        res.status(400).json({ error: 'Bot not connected' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Bot server listening on port ${PORT}`);
});
