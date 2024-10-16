import requests

class MinecraftBot:
    def __init__(self, server_url='http://localhost:3000'):
        self.server_url = server_url

    def connect(self, host, port, username):
        response = requests.post(f'{self.server_url}/connect', json={
            'host': host,
            'port': port,
            'username': username
        })
        return response.json()

    def jump(self):
        response = requests.post(f'{self.server_url}/jump')
        return response.json()

    def strafe(self, direction, duration):
        response = requests.post(f'{self.server_url}/strafe', json={
            'direction': direction,
            'duration': duration
        })
        return response.json()

    def move(self, direction, blocks):
        response = requests.post(f'{self.server_url}/move', json={
            'direction': direction,
            'blocks': blocks
        })
        return response.json()

    def place_block(self):
        response = requests.post(f'{self.server_url}/place_block')
        return response.json()

    def break_block(self):
        response = requests.post(f'{self.server_url}/break_block')
        return response.json()

    def change_block(self, inventory_index_place):
        response = requests.post(f'{self.server_url}/change_block', json={
            'inventory_index_place': inventory_index_place
        })
        return response.json()

    def quick_hand(self):
        response = requests.get(f'{self.server_url}/quick_hand')
        return response.json()
