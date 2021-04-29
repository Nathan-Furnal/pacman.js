/**
 * Provides the view for the Pacman game, based on a game.
 */
class GameView {
  /**
   * Constructs the game view from a game and its maze.
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
    if (this.__game.maze.getWallLayerTile(new Position(row, col))) {
      $("#scene").append(
        $("<span>")
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
    if (this.__game.maze.getDotLayerTile(new Position(row, col))) {
      $("#scene").append(
        $("<span>")
          .addClass("gum")
          .css({
            top: `${gameConsts.itemSize * row}px`,
            left: `${gameConsts.itemSize * col}px`,
          })
      );
    }
  }

  /**
   * Creates the scene where the game takes place, based on the number of rows
   * and columns in the raw maze file. This ensures that the scene has the
   * appropriate size.
   */
  makeScene() {
    $("#scene").css({
      height: `${gameConsts.itemSize * game.maze.nbRows}px`,
      width: `${gameConsts.itemSize * game.maze.nbColumns}px`,
    });
  }
}
