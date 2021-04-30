class PacmanView {
  constructor(pacmanCtrl) {
    this.__pacmanCtrl = pacmanCtrl;
    $("body").on("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.__pacmanCtrl.askToChangeDirection(Direction.NORTH);
          break;
        case "ArrowDown":
          this.__pacmanCtrl.askToChangeDirection(Direction.SOUTH);
          break;
        case "ArrowLeft":
          this.__pacmanCtrl.askToChangeDirection(Direction.WEST);
          break;
        case "ArrowRight":
          this.__pacmanCtrl.askToChangeDirection(Direction.EAST);
          break;
      }
    });
  }
}
