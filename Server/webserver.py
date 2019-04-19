from flask import Flask, flash, request, render_template
from flask_socketio import SocketIO, emit
from multiprocessing import Lock

app = Flask(__name__)
socketio = SocketIO(app)

playersPlaying = 0

joinLock = Lock()

@app.route('/', methods=['GET'])
def index():
	return render_template('index.html')

@socketio.on('connect')
def connect_handler():
    emit('welcome')
    print('[WebSocket] Client connected!')

@socketio.on('disconnect')
def disconnect_handler():
    print('[WebSocket] Client disconnected.')

@socketio.on('gamerequest')
def gamerequest_handler():

    # Check if game is open
    joinLock.acquire()
    global playersPlaying
    print('[WebSocket] Client is requesting to join.')
    if playersPlaying < 4:
        print('[WebSocket] Letting them join.')
        playersPlaying = playersPlaying + 1
        emit('canplay', { player: playersPlaying })
    else:
        print('[WebSocket] Room is full, denial >:D')
        emit('roomfull')
    joinLock.release()

if __name__ == '__main__':
    app.debug = True
    socketio.run(app, host="0.0.0.0", port=80)