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
    this._rawMaze = rawMaze;
    this._wallLayer = new Layer(this.nbRows, this.nbColumns);
    this._buildWallLayer();
    this._dotLayer = new Layer(this.nbRows, this.nbColumns);
    this._buildDotLayer();
    this._pacmanRespawn = this._findPacman();
    this._ghostRespawn = this._findGhosts();
    this._nbDots = this._countDots();
  }

  /**
   * Builds the wall layer, populating it with wall objects.
   */
  _buildWallLayer() {
    for (let i = 0; i < this.nbRows; i++) {
      for (let j = 0; j < this.nbColumns; j++) {
        if (this._rawMaze.table[i][j] === 1) {
          this._wallLayer.setTile(
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
  _buildDotLayer() {
    for (let i = 0; i < this.nbRows; i++) {
      for (let j = 0; j < this.nbColumns; j++) {
        let val = this._rawMaze.table[i][j];
        if (val === 2) {
          this._dotLayer.setTile(new Position(i, j), new Dot(`dot_${i}_${j}`));
        }
        if (val === 3) {
          // Energizer
          this._dotLayer.setTile(
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
    return this._wallLayer.getTile(pos);
  }

  /**
   * Gets the tile from the dot layer, at the given position.
   *
   * @param {Position} pos - the position to get the tile from
   * @returns {Tile} the tile at the given position
   * @throws {Error} will throw an error if the position is not in the layer
   */
  getDotLayerTile(pos) {
    return this._dotLayer.getTile(pos);
  }

  /**
   * Gets the number of rows of the maze.
   *
   * @returns {number} the number of rows
   */
  get nbRows() {
    return this._rawMaze.table.length;
  }

  /**
   * Gets the number of columns of the maze.
   *
   * @returns {number} the number of columns
   */
  get nbColumns() {
    return this._rawMaze.table[0].length;
  }

  /**
   * Finds the initial position for the Pacman.
   *
   * @returns {Position} the position of the Pacman
   * @throws {Error} will throw an error if the Pacman is not found
   */
  _findPacman() {
    for (let i = 0; i < this.nbRows; i++) {
      for (let j = 0; j < this.nbColumns; j++) {
        if (this._rawMaze.table[i][j] === gameConsts.pacmanMazeValue) {
          return new Position(i, j);
        }
      }
    }
    throw new Error("Pacman was not found at initialization time!");
  }

  /**
   * Gets the Pacman's initial position.
   *
   * @returns {Position} the Pacman's initial position
   */
  get pacmanRespawn() {
    return this._pacmanRespawn;
  }

  /**
   * Checks if a tile can be walked on, which is the case for tiles within the
   * scene which are not walls.
   *
   * @param {Position} pos - the position to check out
   * @returns {boolean} true if the tile can be walked on, false otherwise
   */
  canWalkOn(pos) {
    return !(this.getWallLayerTile(pos) instanceof Wall);
  }

  /**
   * Checks if a tile has an item which can be picked up, which is the case for
   * gums (Dot objects).
   *
   * @param {Position} pos - the position to check out
   * @returns {boolean} true if there's an item that can be picked, false
   * otherwise
   */
  canPick(pos) {
    return this.getDotLayerTile(pos) instanceof Dot;
  }

  /**
   * Pick the item at the given position and throws an error if there is no
   * item.
   *
   * @param {Position} pos - the position to check out
   * @returns {Dot} the picked up item
   * @throws {Error} will throw an error if there is no item to pick up
   */
  pick(pos) {
    let picked = this.getDotLayerTile(pos);
    if (picked) {
      return picked;
    } else {
      throw new Error("There is nothing to pick here!");
    }
  }

  /**
   * Finds the initial position for the ghosts.
   *
   * @returns {Position} the position of the ghosts.
   * @throws {Error} will throw an error if the ghost spawn point are not found
   */
  _findGhosts() {
    for (let i = 0; i < this.nbRows; i++) {
      for (let j = 0; j < this.nbColumns; j++) {
        if (this._rawMaze.table[i][j] === gameConsts.ghostMazeValue) {
          return new Position(i, j);
        }
      }
    }
    throw new Error("The ghosts were not found at initialization time!");
  }

  /**
   * Gets the ghost respawn position.
   *
   * @returns {Position} the ghost respawn position
   */
  get ghostRespawn() {
    return this._ghostRespawn;
  }
  /**
   * Counts the number of gums (normal or energizer) in the maze.
   *
   * @returns {number} the count of dots
   */
  _countDots() {
    let tab = this._rawMaze.table;
    let count = 0;
    for (let i = 0; i < this.nbRows; i++) {
      for (let j = 0; j < this.nbColumns; j++) {
        if (tab[i][j] === 2 || tab[i][j] === 3) {
          count++;
        }
      }
    }
    return count;
  }
  /**
   * Checks if a dot is on the layer, meaning it can be picked.
   *
   * @param {Position} pos - the position to check out
   * @returns {boolean} true if there is a dot on the layer and false otherwise
   */
  canPick(pos) {
    return this.getDotLayerTile(pos) instanceof Dot;
  }

  /**
   * Picks the gum at the given position.
   *
   * @param {Position} pos - the position to check out
   * @returns {Dot} the picked dot
   */
  pick(pos) {
    let pickedDot = this.getDotLayerTile(pos);
    this._dotLayer.setTile(pos, undefined);
    this._nbDots--;
    return pickedDot;
  }

  /**
   * Checks if there are no dots left.
   *
   * @returns {boolean} true if all the gums have been eaten and false otherwise
   */
  isEmpty() {
    return this._nbDots === 0;
  }
}
