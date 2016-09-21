var tessel = require('tessel');

var portA = tessel.port.A;
var portB = tessel.port.B;

tessel.pwmFrequency(50);

var motorA = {
  dir: portA.pin[4],
  cdir: portA.pin[3],
  pwm: portA.pwm[0]
};
var motorB = {
  dir: portB.pin[4],
  cdir: portB.pin[3],
  pwm: portB.pwm[0]
};

function forwards (motor) {
  motor.dir.write(1);
  motor.cdir.write(0);
}

function reverse (motor) {
  motor.dir.write(0);
  motor.cdir.write(1);
}

function shortBrake (motor) {
  motor.dir.write(1);
  motor.cdir.write(1);
}

function stop (motor) {
  motor.dir.write(0);
  motor.cdir.write(0);
}

var pwmLoop = setInterval(() => {
  motorA.pwm.pwmDutyCycle(0.6);
  motorB.pwm.pwmDutyCycle(0.6);
}, 500);

/*
setTimeout(() => {
  shortBrake(motorA);
  shortBrake(motorB);
  clearInterval(pwmLoop);
  console.log('motors should stop');
}, 1000);
console.log('motors should be moving');
*/

function forwardMotors () {
  forwards(motorA);
  forwards(motorB);
}

function reverseMotors () {
  reverse(motorA);
  reverse(motorB);
}

function brakeMotors () {
  shortBrake(motorA);
  shortBrake(motorB);
}

function stopMotors () {
  stop(motorA);
  stop(motorB);
}

function turnRight () {
  reverse(motorA);
  forwards(motorB);
}

function turnLeft () {
  forwards(motorA);
  reverse(motorB);
}

module.exports = {
  forward: forwardMotors,
  reverse: reverseMotors,
  brake: brakeMotors,
  stop: stopMotors,
  left: turnLeft,
  right: turnRight
}
