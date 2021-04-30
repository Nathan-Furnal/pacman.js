/**
 * Controls the creation of the game and the view of the game.
 */
class GameCtrl {
  /**
   * Creates a game and a view in the same place for ease of control.
   */
  constructor() {
    this.__game = new Game(RAW_MAZE);
    this.__view = new GameView(this.__game);
    this.__pacmanCtrl = new PacmanCtrl(this.__game.pacman);
    this.__pacmanView = new PacmanView(this.__pacmanCtrl);
  }

  /**
   * Runs the game and updates the sprites at intervals of 0.3 second.
   */
  run() {
    this.__timer = setInterval(() => {
      this.game.moveSprites();
      this.view.updateFrame();
    }, RUN_INTERVAL);
  }

  /**
   * @returns {Game}
   */
  get game() {
    return this.__game;
  }

  /**
   * @returns {GameView}
   */
  get view() {
    return this.__view;
  }
}
