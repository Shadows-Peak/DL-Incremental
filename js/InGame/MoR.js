// Mine of Rizz
document.getElementById('MoRCellR1C1').onclick = clickedMoRCell([1,1]);
document.getElementById('MoRCellR1C2').onclick = clickedMoRCell([1,2]);
document.getElementById('MoRCellR1C3').onclick = clickedMoRCell([1,3]);
document.getElementById('MoRCellR1C4').onclick = clickedMoRCell([1,4]);
document.getElementById('MoRCellR1C5').onclick = clickedMoRCell([1,5]);
document.getElementById('MoRCellR2C1').onclick = clickedMoRCell([2,1]);
document.getElementById('MoRCellR2C2').onclick = clickedMoRCell([2,2]);
document.getElementById('MoRCellR2C3').onclick = clickedMoRCell([2,3]);
document.getElementById('MoRCellR2C4').onclick = clickedMoRCell([2,4]);
document.getElementById('MoRCellR2C5').onclick = clickedMoRCell([2,5]);
document.getElementById('MoRCellR3C1').onclick = clickedMoRCell([3,1]);
document.getElementById('MoRCellR3C2').onclick = clickedMoRCell([3,2]);
document.getElementById('MoRCellR3C3').onclick = clickedMoRCell([3,3]);
document.getElementById('MoRCellR3C4').onclick = clickedMoRCell([3,4]);
document.getElementById('MoRCellR3C5').onclick = clickedMoRCell([3,5]);
document.getElementById('MoRCellR4C1').onclick = clickedMoRCell([4,1]);
document.getElementById('MoRCellR4C2').onclick = clickedMoRCell([4,2]);
document.getElementById('MoRCellR4C3').onclick = clickedMoRCell([4,3]);
document.getElementById('MoRCellR4C4').onclick = clickedMoRCell([4,4]);
document.getElementById('MoRCellR4C5').onclick = clickedMoRCell([4,5]);
document.getElementById('MoRCellR5C1').onclick = clickedMoRCell([5,1]);
document.getElementById('MoRCellR5C2').onclick = clickedMoRCell([5,2]);
document.getElementById('MoRCellR5C3').onclick = clickedMoRCell([5,3]);
document.getElementById('MoRCellR5C4').onclick = clickedMoRCell([5,4]);
document.getElementById('MoRCellR5C5').onclick = clickedMoRCell([5,5]);

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

