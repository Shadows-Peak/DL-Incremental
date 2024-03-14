// Mine of Rizz
MoRCellR1C1.onclick = clickedMoRCell([1,1]);
MoRCellR1C2.onclick = clickedMoRCell([1,2]);
MoRCellR1C3.onclick = clickedMoRCell([1,3]);
MoRCellR1C4.onclick = clickedMoRCell([1,4]);
MoRCellR1C5.onclick = clickedMoRCell([1,5]);
MoRCellR2C1.onclick = clickedMoRCell([2,1]);
MoRCellR2C2.onclick = clickedMoRCell([2,2]);
MoRCellR2C3.onclick = clickedMoRCell([2,3]);
MoRCellR2C4.onclick = clickedMoRCell([2,4]);
MoRCellR2C5.onclick = clickedMoRCell([2,5]);
MoRCellR3C1.onclick = clickedMoRCell([3,1]);
MoRCellR3C2.onclick = clickedMoRCell([3,2]);
MoRCellR3C3.onclick = clickedMoRCell([3,3]);
MoRCellR3C4.onclick = clickedMoRCell([3,4]);
MoRCellR3C5.onclick = clickedMoRCell([3,5]);
MoRCellR4C1.onclick = clickedMoRCell([4,1]);
MoRCellR4C2.onclick = clickedMoRCell([4,2]);
MoRCellR4C3.onclick = clickedMoRCell([4,3]);
MoRCellR4C4.onclick = clickedMoRCell([4,4]);
MoRCellR4C5.onclick = clickedMoRCell([4,5]);
MoRCellR5C1.onclick = clickedMoRCell([5,1]);
MoRCellR5C2.onclick = clickedMoRCell([5,2]);
MoRCellR5C3.onclick = clickedMoRCell([5,3]);
MoRCellR5C4.onclick = clickedMoRCell([5,4]);
MoRCellR5C5.onclick = clickedMoRCell([5,5]);

function clickedMoRCell(x) {
  alert("begeg");
  if (MoRCellHighlight == x) {
    alert("VGETGWG");
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

