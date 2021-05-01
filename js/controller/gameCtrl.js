/**
 * Controls the creation of the game and the view of the game.
 */
class GameCtrl {
  /**
   * Creates a game and a view in the same place for ease of control.
   */
  constructor() {
    this._game = new Game(RAW_MAZE);
    this._view = new GameView(this._game);
    this._pacmanCtrl = new PacmanCtrl(this._game.pacman);
    this._pacmanView = new PacmanView(this._pacmanCtrl);
  }

  /**
   * Runs the game and updates the sprites at intervals of 0.3 second.
   */
  run() {
    this._timer = setInterval(() => {
      this.game.moveSprites();
      this.view.updateFrame();
    }, RUN_INTERVAL);
  }

  /**
   * @returns {Game}
   */
  get game() {
    return this._game;
  }

  /**
   * @returns {GameView}
   */
  get view() {
    return this._view;
  }
}
