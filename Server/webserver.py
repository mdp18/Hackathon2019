from flask import Flask, flash, request, render_template
from flask_login import current_user, LoginManager
from flask_socketio import SocketIO, emit, disconnect
from multiprocessing import Lock
import random
import functools

app = Flask(__name__)
app.config['SESSION_TYPE'] = 'filesystem'

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = '/'

socketio = SocketIO(app, manage_session=False)

connectedUsers = {}
playerLock = Lock()

def getPlayersPlaying():
    global connectedUsers
    ids = []
    for uuid in connectedUsers:
        if connectedUsers[uuid] != -1:
            ids.append(connectedUsers[uuid])
    return ids

def getNextPlayer(players):
    available = [1, 2, 3, 4]
    for element in players:
        available.remove(element)

    if len(available) > 0:
        return available[0]
    else:
        return 0

@app.route('/', methods=['GET'])
def index():
	return render_template('index.html')

@socketio.on('connect')
def connect_handler():
    emit('welcome')
    print('[WebSocket] Client connected!')
    
    # Give anonymous user a unique id
    playerLock.acquire()
    global connectedUsers

    uuid = random.getrandbits(64)
    while uuid in connectedUsers:
        uuid = random.getrandbits(64)

    # Set -1 for watching
    connectedUsers[uuid] = -1
    playerLock.release()

    print(f'[WebSocket] UUID = {uuid}')

@socketio.on('disconnect')
def disconnect_handler():
    print('[WebSocket] Client disconnected.')

    playerLock.acquire()
    global connectedUsers
    
    #Remove uuid
    if current_user.id in connectedUsers:
        del connectedUsers[current_user.id]

    playerLock.release()

@socketio.on('gamerequest')
def gamerequest_handler():

    # Check if game is open
    playerLock.acquire()
    print('[WebSocket] Client is requesting to join.')
    global connectedUsers
    playersPlaying = getPlayersPlaying()
    if len(playersPlaying) < 4:
        print('[WebSocket] Letting them join.')
        
        # Set them as playing
        nextPlayer = getNextPlayer(playersPlaying)
        connectedUsers[current_user.id] = nextPlayer
        emit('canplay', { 'player': nextPlayer })
    else:
        print('[WebSocket] Room is full, denial >:D')
        emit('roomfull')
    playerLock.release()

if __name__ == '__main__':
    app.debug = True
    socketio.run(app, host="0.0.0.0", port=80)