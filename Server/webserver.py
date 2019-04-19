from flask import Flask, flash, request, render_template
from flask_socketio import SocketIO
import os
import ssl

app = Flask(__name__)
socketio = SocketIO(app)

@app.route('/', methods=['GET'])
def index():
	return render_template('index.html')

if __name__ == '__main__':
    app.debug = True
    socketio.run(app, host="0.0.0.0", port=80)