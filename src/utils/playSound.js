import { Howl } from 'howler';

const buttonClickSound = new Howl({
  src: ['/sounds/mouseClick.mp3'],
  rate: 2.0,
});

const playButtonSound = () => {
  buttonClickSound.play();
};

export default playButtonSound;