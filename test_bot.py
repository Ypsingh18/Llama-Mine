from minecraft_bot import MinecraftBot
import time

def main():
    bot = MinecraftBot()

    # Connect to the server
    server_address = input("Enter server address (e.g., localhost): ")
    server_port = int(input("Enter server port (default: 25565): ") or 25565)
    username = input("Enter bot username: ")

    print("Connecting to server...")
    result = bot.connect(server_address, server_port, username)
    print(result)

    # Wait for the bot to spawn
    time.sleep(5)

    # Test basic movements
    print("Testing jump...")
    print(bot.jump())
    time.sleep(1)

    print("Testing strafe...")
    print(bot.strafe("forward", 1000))  # Strafe forward for 1 second
    time.sleep(2)

    print("Testing move...")
    print(bot.move("forward", 5))  # Move forward 5 blocks
    time.sleep(3)

    print("Testing place block...")
    print(bot.place_block())
    time.sleep(1)

    print("Testing break block...")
    print(bot.break_block())
    time.sleep(1)

    print("Testing change block...")
    print(bot.change_block(0))  # Change to the first slot in the hotbar
    time.sleep(1)

    print("Testing quick hand...")
    print(bot.quick_hand())

if __name__ == "__main__":
    main()
