from time import sleep

class Physics():
    def __init__(self):
        self.run = True
        self.fps = 60.0
        self.ticks = 0  # Number of physics ticks
        self.sizePx = 300 # Width Px
        self.ballRadPx = 20 # Ball Radius 

        hSz = self.sizePx / 2.0

        self.ballX = hSz # Percent of X
        self.ballY = hSz # Percent of Y
        self.ballSpeed = 5
        self.paddleSpeed = 5
        self.ballXDir = 1
        self.ballYDir = 1
        self.paddles = [ hSz, hSz, hSz, hSz ] # Paddle locations

    def moveBall(self):
        if self.ballX > self.sizePx - self.ballRadPx or self.ballX < self.ballRadPx:
            self.ballXDir *= -1
        if self.ballY > self.sizePx - self.ballRadPx or self.ballY < self.ballRadPx:
            self.ballYDir *= -1

        self.ballX = self.ballX + self.ballSpeed * self.ballXDir
        self.ballY = self.ballY + self.ballSpeed * self.ballYDir

    def tick(self):
        self.moveBall()
        self.ticks = self.ticks + 1

    def movePaddle(self, paddleNum, direction):
        self.paddles[paddleNum - 1] += self.paddleSpeed * direction

    def run(self):
        while self.run:
            self.tick()
            sleep(1.0 / fps)

    