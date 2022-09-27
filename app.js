// https://www.omnicalculator.com/everyday-life/rpm#how-to-calculate-rpm

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const engineRPMRadio = document.getElementById('engineRPMRadio');
const wheelRPMRadio = document.getElementById('wheelRPMRadio');
const drivetraintransmissionratioRadio = document.getElementById('drivetraintransmissionratioRadio');

let engineRPM;
let wheelRPM = v1;
let drivetraintransmissionratio = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

engineRPMRadio.addEventListener('click', function() {
  variable1.textContent = 'Wheel RPM';
  variable2.textContent = 'Drivetrain transmission ratio';
  wheelRPM = v1;
  drivetraintransmissionratio = v2;
  result.textContent = '';
});

wheelRPMRadio.addEventListener('click', function() {
  variable1.textContent = 'Engine RPM';
  variable2.textContent = 'Drivetrain transmission ratio';
  engineRPM = v1;
  drivetraintransmissionratio = v2;
  result.textContent = '';
});

drivetraintransmissionratioRadio.addEventListener('click', function() {
  variable1.textContent = 'Engine RPM';
  variable2.textContent = 'Wheel RPM';
  engineRPM = v1;
  wheelRPM = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(engineRPMRadio.checked)
    result.textContent = `Engine RPM = ${computeengineRPM().toFixed(2)}`;

  else if(wheelRPMRadio.checked)
    result.textContent = `Wheel RPM = ${computewheelRPM().toFixed(2)}`;

  else if(drivetraintransmissionratioRadio.checked)
    result.textContent = `Drivetrain transmission ratio = ${computedrivetraintransmissionratio().toFixed(2)}`;
})

// calculation

function computeengineRPM() {
  return Number(wheelRPM.value) * Number(drivetraintransmissionratio.value);
}

function computewheelRPM() {
  return Number(engineRPM.value) / Number(drivetraintransmissionratio.value);
}

function computedrivetraintransmissionratio() {
  return Number(engineRPM.value) / Number(wheelRPM.value);
}