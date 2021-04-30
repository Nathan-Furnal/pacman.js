/**
 * Provides the view for the Pacman game, based on a game.
 */
class GameView {
  /**
   * Constructs the game view from a game and its maze with a Pacman.
   *
   * @param {Game} game - the game to build the view for
   */
  constructor(game) {
    this.__game = game;
    this.makeScene();
    for (let i = 0; i < game.maze.nbRows; i++) {
      for (let j = 0; j < game.maze.nbColumns; j++) {
        this.makeWallTile(i, j);
        this.makeDotTile(i, j);
      }
    }
    this.makePacman();
  }

  /**
   * Checks if a given tile of the maze is a wall tile and draws it on the
   * screen if that's the case. it requires a row and column to checks for the
   * position on the maze.
   *
   * @param {number} row - the row of the position to check on the maze
   * @param {number} col - the column of the position to check on the maze
   */
  makeWallTile(row, col) {
    let tile = this.game.maze.getWallLayerTile(new Position(row, col));
    if (tile) {
      $("#scene").append(
        $("<span>", { id: tile.id })
          .addClass("wall")
          .css({
            top: `${gameConsts.itemSize * row}px`,
            left: `${gameConsts.itemSize * col}px`,
          })
      );
    }
  }

  /**
   * Checks if a given tile of the maze is a dot tile and draws it on the screen
   * if that's the case. it requires a row and column to checks for the position
   * on the maze.
   *
   * @param {number} row - the row of the position to check on the maze
   * @param {number} col - the column of the position to check on the maze
   */
  makeDotTile(row, col) {
    let tile = this.game.maze.getDotLayerTile(new Position(row, col));
    if (tile) {
      $("#scene").append(
        $("<span>", { id: tile.id })
          .addClass("gum")
          .css({
            top: `${gameConsts.itemSize * row}px`,
            left: `${gameConsts.itemSize * col}px`,
          })
      );
      if (tile.isEnergizer) {
        $(`#${tile.id}`).removeClass("gum").addClass("energizer");
      }
    }
  }

  /**
   * Creates the scene where the game takes place, based on the number of rows
   * and columns in the raw maze file. This ensures that the scene has the
   * appropriate size.
   */
  makeScene() {
    $("#scene").css({
      height: `${gameConsts.itemSize * this.game.maze.nbRows}px`,
      width: `${gameConsts.itemSize * this.game.maze.nbColumns}px`,
    });
  }

  /**
   * Creates the Pacman visual and appends it to the scene at the correct
   * position.
   */
  makePacman() {
    let pos = this.game.pacman.position;
    $("#scene").append(
      $("<span>", { id: this.game.pacman.id }).css({
        top: `${gameConsts.itemSize * pos.row}px`,
        left: `${gameConsts.itemSize * pos.column}px`,
      })
    );
  }

  /**
   * Updates the frame and the sprites position.
   */
  updateFrame() {
    $("#pacman-id").remove();
    this.makePacman();
  }

  /**
   * Gets the game composing the view.
   *
   * @returns {Game} the game
   */
  get game() {
    return this.__game;
  }
}
