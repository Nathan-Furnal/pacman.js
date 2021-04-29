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
  }
}
