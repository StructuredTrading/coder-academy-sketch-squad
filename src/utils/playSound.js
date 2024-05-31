import { Howl } from 'howler';

const buttonClickSound = new Howl({
  src: ['/sounds/buttonClick.mp3'],
  rate: 2.0,
});

const playButtonSound = () => {
  buttonClickSound.play();
};

const buttonHoverSound = new Howl({
  src: ['/sounds/buttonHover.mp3'],
});

const playButtonHoverSound = () => {
  buttonHoverSound.play();
}

const clockCountdownSound = new Howl({
  src: ['/sounds/clockCountDownSound.mp3'],
})

const playClockCountdownSound = () => {
  clockCountdownSound.play();
}

export {
  playButtonSound,
  playButtonHoverSound,
  playClockCountdownSound
}
