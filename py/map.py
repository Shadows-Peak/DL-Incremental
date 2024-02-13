import pynput

global Zone
Zone = 1
global Room
Room = 1
global mapPos
mapPos = [3,3]

#from rython import *
global Firstmap
#Firstmap = Matrix.new(5)
#Firstmap.modifyPos([3,3],1)

def on_press(key):
    print('{0} pressed'.format(
        key))

def on_release(key):
    print('{0} release'.format(
        key))
    if key == pynput.keyboard.Key.esc:
        # Stop listener
        return False

# Collect events until released
with pynput.keyboard.Listener(
        on_press=on_press,
        on_release=on_release) as listener:
    listener.join()