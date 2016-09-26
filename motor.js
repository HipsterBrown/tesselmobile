var tessel = require('tessel');

var portA = tessel.port.A;
var portB = tessel.port.B;

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

// motor directions
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

// motor control functions
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

// set the frequency to 50, needed for motor control
tessel.pwmFrequency(50);

// start powering the motors
var pwmLoop = setInterval(() => {
  motorA.pwm.pwmDutyCycle(0.6);
  motorB.pwm.pwmDutyCycle(0.6);
}, 500);

module.exports = {
  forward: forwardMotors,
  reverse: reverseMotors,
  brake: brakeMotors,
  stop: stopMotors,
  left: turnLeft,
  right: turnRight
}
