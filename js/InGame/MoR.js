// Mine of Rizz
function clickedMoRCell(x) {
  if (inLooksmaxxingChallenge == 0) {
    if (MoRCellHighlight[0] == x[0] && MoRCellHighlight[1] == x[1]) {
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
}

function setClickProcesses4() {
  document.getElementById('MoRCellR1C1').onclick = function(){clickedMoRCell([1,1]);};
  document.getElementById('MoRCellR1C2').onclick = function(){clickedMoRCell([1,2]);};
  document.getElementById('MoRCellR1C3').onclick = function(){clickedMoRCell([1,3]);};
  document.getElementById('MoRCellR1C4').onclick = function(){clickedMoRCell([1,4]);};
  document.getElementById('MoRCellR1C5').onclick = function(){clickedMoRCell([1,5]);};
  document.getElementById('MoRCellR2C1').onclick = function(){clickedMoRCell([2,1]);};
  document.getElementById('MoRCellR2C2').onclick = function(){clickedMoRCell([2,2]);};
  document.getElementById('MoRCellR2C3').onclick = function(){clickedMoRCell([2,3]);};
  document.getElementById('MoRCellR2C4').onclick = function(){clickedMoRCell([2,4]);};
  document.getElementById('MoRCellR2C5').onclick = function(){clickedMoRCell([2,5]);};
  document.getElementById('MoRCellR3C1').onclick = function(){clickedMoRCell([3,1]);};
  document.getElementById('MoRCellR3C2').onclick = function(){clickedMoRCell([3,2]);};
  document.getElementById('MoRCellR3C3').onclick = function(){clickedMoRCell([3,3]);};
  document.getElementById('MoRCellR3C4').onclick = function(){clickedMoRCell([3,4]);};
  document.getElementById('MoRCellR3C5').onclick = function(){clickedMoRCell([3,5]);};
  document.getElementById('MoRCellR4C1').onclick = function(){clickedMoRCell([4,1]);};
  document.getElementById('MoRCellR4C2').onclick = function(){clickedMoRCell([4,2]);};
  document.getElementById('MoRCellR4C3').onclick = function(){clickedMoRCell([4,3]);};
  document.getElementById('MoRCellR4C4').onclick = function(){clickedMoRCell([4,4]);};
  document.getElementById('MoRCellR4C5').onclick = function(){clickedMoRCell([4,5]);};
  document.getElementById('MoRCellR5C1').onclick = function(){clickedMoRCell([5,1]);};
  document.getElementById('MoRCellR5C2').onclick = function(){clickedMoRCell([5,2]);};
  document.getElementById('MoRCellR5C3').onclick = function(){clickedMoRCell([5,3]);};
  document.getElementById('MoRCellR5C4').onclick = function(){clickedMoRCell([5,4]);};
  document.getElementById('MoRCellR5C5').onclick = function(){clickedMoRCell([5,5]);};
}