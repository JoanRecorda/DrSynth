let wave;

let button;
let slider;
let playing = false;

let env;

function setup() {
  let cnv = createCanvas(400, 400);

  env = new p5.Env();
  env.setADSR(0.1, 0.9, 1, 0.5);
  env.setRange(0.8, 0);

  wave = new p5.Oscillator();
  slider = createSlider(100, 2400, 440);

  wave.setType('sawtooth');
  wave.start();
  wave.freq(440);
  wave.amp(env);

  button = createButton('play/pause)');
  button.mousePressed(toggle);
}

function draw() {
  wave.freq(slider.value());
  if (playing) {
    background(255, 0, 255);
  } else {
    background(51);
  }
}

function toggle() {
  env.play();

//   // if (!playing) {
//   //   wave.amp(0.5, 1);
//   //   playing = true;
//   // } else {
//   //   wave.amp(0, 1);
//   //   playing = false;
//   // }
}
