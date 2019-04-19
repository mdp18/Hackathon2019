import websocket
import _thread
import time

def on_message(ws, message):
    print("[WebSocket] Message: %s" % (message))

def on_error(ws, error):
    print("[WebSocket] Error: %s" % (error))

def on_close(ws):
    print("[WebSocket] Closed")

def client_thread(*args):
    for i in range(30000):
        time.sleep(1)
        ws.send("Hello %d" % i)
    time.sleep(1)
    ws.close()
    print("[WebSocket] Disconnecting...")

def on_open(ws):     
    _thread.start_new_thread(client_thread, ())

if __name__ == "__main__":
    websocket.enableTrace(True)

    # Start websocket server
    ws = websocket.WebSocketApp("ws://0.0.0.0:5122/",
                                on_message = on_message,
                                on_error = on_error,
                                on_close = on_close)
    ws.on_open = on_open

    print("[WebSocket] Server started!")
    ws.run_forever()