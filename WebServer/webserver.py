from flask import Flask, flash, request, render_template
import os
import ssl

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
	return render_template('index.html')

if __name__ == '__main__':
    sess.init_app(app)

    app.debug = True
    app.run(ssl_context=None)