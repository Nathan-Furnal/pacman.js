/**
 * Provides a two layered maze based on a raw maze file which is a 2d array of
 * numbers. One layer corresponds to the walls and the other to the dots.
 */
class Maze {
  /**
   * Constructs the maze from a raw maze file. Each layer is created and then
   * populated with the relevant objects.
   *
   * @param {number[][]} rawMaze - the 2d array on which the maze object is
   * based
   */
  constructor(rawMaze) {
    this.__rawMaze = rawMaze;
    this.__wallLayer = new Layer(this.nbRows, this.nbColumns);
    this.buildWallLayer();
    this.__dotLayer = new Layer(this.nbRows, this.nbColumns);
    this.buildDotLayer();
    this.__pacmanRespawn = this.findPacman();
  }

  /**
   * Builds the wall layer, populating it with wall objects.
   */
  buildWallLayer() {
    for (let i = 0; i < this.nbRows; i++) {
      for (let j = 0; j < this.nbColumns; j++) {
        if (this.__rawMaze.table[i][j] === 1) {
          this.__wallLayer.setTile(
            new Position(i, j),
            new Wall(`wall_${i}_${j}`)
          );
        }
      }
    }
  }
  /**
   * Builds the dot layer, populating it with dot objects.
   */
  buildDotLayer() {
    for (let i = 0; i < this.nbRows; i++) {
      for (let j = 0; j < this.nbColumns; j++) {
        let val = this.__rawMaze.table[i][j];
        if (val === 2) {
          this.__dotLayer.setTile(new Position(i, j), new Dot(`dot_${i}_${j}`));
        }
        if (val === 3) {
          // Energizer
          this.__dotLayer.setTile(
            new Position(i, j),
            new Dot(`dot_${i}_${j}`, true)
          );
        }
      }
    }
  }

  /**
   * Gets the tile from the wall layer, at the given position.
   *
   * @param {Position} pos - the position to get the tile from
   * @returns {Tile} the tile at the given position
   * @throws {Error} will throw an error if the position is not in the layer
   */
  getWallLayerTile(pos) {
    return this.__wallLayer.getTile(pos);
  }

  /**
   * Gets the tile from the dot layer, at the given position.
   *
   * @param {Position} pos - the position to get the tile from
   * @returns {Tile} the tile at the given position
   * @throws {Error} will throw an error if the position is not in the layer
   */
  getDotLayerTile(pos) {
    return this.__dotLayer.getTile(pos);
  }

  /**
   * Gets the number of rows of the maze.
   *
   * @returns {number} the number of rows
   */
  get nbRows() {
    return this.__rawMaze.table.length;
  }

  /**
   * Gets the number of columns of the maze.
   *
   * @returns {number} the number of columns
   */
  get nbColumns() {
    return this.__rawMaze.table[0].length;
  }

  /**
   * Finds the initial position for the Pacman.
   *
   * @returns {Position} the position of the Pacman
   * @throws {Error} will throw an error if the Pacman is not found
   */
  findPacman() {
    for (let i = 0; i < this.nbRows; i++) {
      for (let j = 0; j < this.nbColumns; j++) {
        if (this.__rawMaze.table[i][j] === gameConsts.pacmanMazeValue) {
          return new Position(i, j);
        }
      }
    }
    throw new Error("Pacman was not found at initialization time!");
  }
}
