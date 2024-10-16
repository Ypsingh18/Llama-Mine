# Minecraft Bot Controller

This project implements a Minecraft bot that can be controlled via Python. It uses the Mineflayer library for the bot implementation and provides a simple API for controlling the bot from Python.

## Features

- Connect to a Minecraft server
- Basic movements: jump, strafe, move
- Place and break blocks
- Change held item
- View quick hand inventory

## Prerequisites

- Node.js (v12 or higher)
- Python (v3.6 or higher)
- A Minecraft server (1.8 or higher)

## Installation

1. Clone this repository:   ```
   git clone https://github.com/yourusername/minecraft-bot-controller.git
   cd minecraft-bot-controller   ```

2. Install Node.js dependencies:   ```
   npm install   ```

3. Install Python dependencies:   ```
   pip install requests   ```

## Usage

1. Start the bot server:   ```
   node bot_server.js   ```

2. In a separate terminal, run the test script:   ```
   python test_bot.py   ```

3. Follow the prompts to connect to a Minecraft server and test the bot's functionality.

## Project Structure

- `bot_server.js`: Node.js server that interfaces with Minecraft using Mineflayer
- `minecraft_bot.py`: Python class for controlling the bot
- `test_bot.py`: Example script for testing bot functionality

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
