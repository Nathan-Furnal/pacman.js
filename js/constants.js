/**
 * Game constants like the size of the items or the number referencing the
 * Pacman and the ghosts on the maze file.
 *
 * @constant
 * @type {{itemSize : number, pacmanMazeValue : number, ghostMazeValue : number}}
 */
const gameConsts = {
  itemSize: 15,
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
