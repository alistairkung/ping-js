describe("Game", function () {
  var game, canvas;

  canvas = document.createElement("canvas");

  beforeEach(function () {
    game = new Game(canvas);
    game.start();
  });

  describe("Initialisation", function () {
    it("has a canvas", function () {
      expect(game.canvas.id).not.toBe(undefined)
    });
  });
  describe("#start", function () {
    it("has a paddle", function () {
      expect(game.p1).not.toBe(undefined)
    });
    it("has a second paddle", function () {
      expect(game.p2).not.toBe(undefined)
    });
    it("has a ball", function () {
      expect(game.ball).not.toBe(undefined)
    });
  });
  describe("#update", function () {
    it("can move the ball", function () {
      initialBallX = game.ball.x;
      initialBallY = game.ball.y;
      game.update();
      expect(game.ball.x).not.toEqual(initialBallX);
      expect(game.ball.y).not.toEqual(initialBallY);
    });
  });
});
