import websockets
import _thread
import time
import asyncio

def on_join(websocket, path):
    print("[WebSocket] Joined")

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

if __name__ == "__main__":
    # Start websocket server
    start_server = websockets.serve(on_join, 'localhost', 5122)
    print("[WebSocket] Server started!")

    asyncio.get_event_loop().run_until_complete(start_server)
    asyncio.get_event_loop().run_forever()

