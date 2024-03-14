// Mine of Rizz
function clickedMoRCell(x) {
  if (MoRCellHighlight == x) {
    if (clicks >= 10000000 && RizzPoints >= 50 && RizziteNRizzium[0] < 10) {
      clicks -= 10000000;
      RizzPoints -= 50;
      RizziteNRizzium[0] += 1;
    }
    if (RizziteNRizzium[0] == 10) {
      RizziteNRizzium[0] = 0;
      RizziteNRizzium[1] += 1;
    }
    updateVisuals();
  }
}