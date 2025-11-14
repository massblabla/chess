@namespace
class SpriteKind:
    Piece = SpriteKind.create()
# Stage counter
stage = 0
# Moves counter
# Initialize the game (not the chess)
def init():
    global stage
    stage = 0
    scene.set_background_image(assets.image("""
        startup
        """))
# Start the game and initialize it
def startGame():
    global stage
    stage = 1
    scene.set_background_image(assets.image("""
        bg
        """))
# Main function
def main():
    init()
# Check buttons

def on_a_pressed():
    pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_b_pressed():
    if stage == 0:
        scene.set_background_image(assets.image("""
            startup0
            """))
        pause(500)
        startGame()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

# Run main
main()