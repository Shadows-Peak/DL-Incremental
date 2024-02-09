global Zone
Zone = 1
global Room
Room = 1
global mapPos
mapPos = [3,3]

from rython import *
global Firstmap
Firstmap = Matrix.new(5)
Firstmap.modifyPos([3,3],1)

import keyboard  # using module keyboard
while True:  # making a loop
    try:  # used try so that if user pressed other than the given key error will not be shown
        if keyboard.is_pressed('q'):  # if key 'q' is pressed 
            print('You Pressed A Key!')
            break  # finishing the loop
    except:
        break  # if user pressed a key other than the given key the loop will break