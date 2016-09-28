# TesselMobile

A starter project for getting your Tessel on wheels!

## Hardware Setup

**Materials:**

- 1 Tessel 2\*
- 1 Breadboard \*
- 1 Sparkfun Motor Driver Breakout\*
- 2 Hobby Gear Motors\*
- Jumper Wires\*
- 1 [Robot Chassis Kit](http://tinkersphere.com/motors-wheels/429-robot-chassis-kit-arduino-compatible.html) (Tinkersphere)
- [Monoprice Hook and Loop Fastening Cable Ties](https://www.amazon.com/Monoprice-106457-Hook-Fastening-Cable/dp/B004AFUJZC/) (Amazon)
- Rubber Bands
- [Gear Head Pocket-Size Travel Powerbank](https://www.amazon.com/Gear-Head-Pocket-Size-Powerbank-PB3500BLK/dp/B00LAJM7VU?psc=1&SubscriptionId=AKIAILSHYYTFIVPWUY6Q&tag=duckduckgo-osx-20&linkCode=xm2&camp=2025&creative=165953&creativeASIN=B00LAJM7VU) (Amazon)

\* Included in the highly-recommended [Johnny-Five Inventor's Kit](https://www.sparkfun.com/products/13847).

**Assembly:**

Starting with the motors, slide the long Motor Mount Screws through the 2 holes in the Hobby Gear Motor:

![Motor with screws](images/motor-step-1.png)

Attach with nuts. Repeat for the other motor.

![Motor with screws, reverse view](images/motor-step-2.png)

Attach the Caster Wheel to the narrow end of the Acrylic Frame using 4 screws and nuts.

Attach the Hobby Gear Motors to the Acrylic Frame with the Motor Mount facing the center of the frame; the tip of the motor should be facing the Caster Wheel.

Attach the Tires to the now-mounted motors.

Place the breadboard and Tessel 2 on top of chassis with the Tessel at the front, using the following diagram to hookup the motor driver to the Tessel:

![motor driver fritzing](images/motor-diagram.png)

Once the wires are in place, use a few rubber bands to keep the breadboard and Tessel in place when the Tesselmobile starts moving.

Use the Cable Ties to mount the Powerbank under Frame, probably overlapping the breadboard on top, with the USB ports facing out the left side of the chassis.

Hold off on using the micro USB -> USB cable to power the Tessel until the program is loaded.

## Software Setup

**Requirements:**

- [Node.js, either LTS or Current](https://nodejs.org/en/)
- [`t2-cli`](https://www.npmjs.com/package/t2-cli) should be installed globally, `npm install t2-cli --global`

Start off by cloning this repo and `cd`ing into the created folder:

```
git clone https://github.com/HipsterBrown/tesselmobile.git
cd tesselmobile
```

Install the `npm` dependencies needed to run this project:

```
npm install
```

Connect the Tessel to your computer using the USB cable. After the blue light has stopped pulsing:

```
t2 rename tesselmobile
t2 push app.js
```

Once the confirmation that the program has been successfully installed on the Tessel, disconnect the USB cable from the computer. Now connect the Tessel to the Powerbank. 

When the green and amber lights come on, look for the "TesselMobile" network on your computer or another web browsing device and connect to it with the password "SuperSecret123". Once connected to "TesselMobile", open up a web browser pointing to "http://tesselmobile.local". 

![motor controls UI](images/app-screenshot.png)

Click around and watch your Tessel move!

![final assembled car](images/finished-assembly.jpg)

## Moving Forward (pun intended)

Check out the [Tessel Hardware API docs](https://tessel.gitbooks.io/t2-docs/content/Tutorials/Pulse_Width_Modulation.html) to learn more about pulse width modulation (pwm) and the other capabilites to continue adding features to your project, i.e. a slider to the app to control the speed of the car. 

## Issues

Please [open an issue](https://github.com/HipsterBrown/tesselmobile/issues/new) if you run into any problems during development or operation.
