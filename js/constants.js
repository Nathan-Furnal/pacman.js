/**
 * Game constants like the size of the items or the number referencing the
 * Pacman and the ghosts on the maze file.
 *
 * @constant
 * @type {{itemSize : number, itemSizeWithSpace : number, pacmanMazeValue : number, ghostMazeValue : number}}
 */
const gameConsts = {
  itemSize: 15,
  itemSizeWithSpace: 20,
  pacmanMazeValue: 4,
  ghostMazeValue: 5,
};

/**
 * The Pacman's default HTML identifier.
 *
 * @constant
 * @type {string}
 */
const PACMAN_ID = "pacman-id";

/**
 * The run interval between frame updates, set to 300ms.
 *
 * @constant
 * @type {number}
 */
const RUN_INTERVAL = 300;

/**
 * North direction.
 *
 * @type {Direction}
 */
Direction.NORTH = new Direction(0, -1);
/**
 * South direction.
 *
 * @type {Direction}
 */
Direction.SOUTH = new Direction(0, 1);
/**
 * West direction.
 *
 * @type {Direction}
 */
Direction.WEST = new Direction(-1, 0);
/**
 * East direction.
 *
 * @type {Direction}
 */
Direction.EAST = new Direction(1, 0);

/**
 * The four possible directions in the game.
 *
 * @constant
 * @type {Direction[]}
 */
const directions = [
  Direction.NORTH,
  Direction.SOUTH,
  Direction.WEST,
  Direction.EAST,
];

/**
 * The interval between ghosts direction change, set to 4000ms (4s).
 *
 * @constant
 * @type {number}
 */
const GHOST_INTERVAL = 4000;

/**
 * The initial number of lives for the Pacman.
 *
 * @constant
 * @type {number}
 */
const PACMAN_NB_LIVES = 2;

/**
 * The start button id.
 *
 * @constant
 * @type {string}
 */
const START_BUTTON_ID = "start-button";

/**
 * Duration of the Pacman's drunken state.
 *
 * @constant
 * @type {number}
 */
const DRUNK_TIME = 5000;
