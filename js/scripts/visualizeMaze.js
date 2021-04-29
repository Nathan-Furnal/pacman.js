/**
 * Makes the maze from the `RAW_MAZE` constant. The method iterates over the
 * constant and add the class as well as the position depending on the value.
 */
function makeMaze() {
  for (let i = 0; i < RAW_MAZE.table.length; i++) {
    for (let j = 0; j < RAW_MAZE.table[i].length; j++) {
      if (RAW_MAZE.table[i][j] === 1) {
        $("#scene").append(
          $("<span>")
            .addClass("wall")
            .css({ top: `${15 * i}px`, left: `${15 * j}px` })
        );
      }
      if (RAW_MAZE.table[i][j] === 2) {
        $("#scene").append(
          $("<span>")
            .addClass("gum")
            .css({ top: `${15 * i}px`, left: `${15 * j}px` })
        );
      }
    }
  }
}
