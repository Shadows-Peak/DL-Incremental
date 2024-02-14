from js import document

chart_element = document.getElementById("chart")
chart_element.innerHTML = 'Press a key to see its code.'

def on_keydown(event):
    # Modify the 'chart' div when a key is pressed
    chart_element.innerHTML = f'Key {event.key} was pressed.'

def on_keyup(event):
    # Modify the 'chart' div when a key is released
    chart_element.innerHTML = f'Key {event.key} was released.'

# Attach the event handlers to the 'keydown' and 'keyup' events
document.addEventListener('keydown', on_keydown)
document.addEventListener('keyup', on_keyup)