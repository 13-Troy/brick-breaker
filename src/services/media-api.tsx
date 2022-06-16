import EventEmitter from 'eventemitter3';
import collectAudio from '../assets/audio/collect.mp3';
import beatAudio from '../assets/audio/beat.mp3';
import gameStartAudio from '../assets/audio/game-start.mp3';
import gameOverAudio from '../assets/audio/game-over.mp3';
import gamePausedAudio from '../assets/audio/game-paused.mp3';
import gameWinAudio from '../assets/audio/game-win.mp3';
import newLevelAudio from '../assets/audio/new-level.mp3';
import decreaseLivesAudio from '../assets/audio/decrease-lives.mp3';

export class AudioManager extends EventEmitter {
  constructor() {
    super();
  }

  collect() {
    this.fetchAudioAndPlay(collectAudio);
  }

  beat() {
    this.fetchAudioAndPlay(beatAudio);
  }

  start() {
    this.fetchAudioAndPlay(gameStartAudio);
  }

  gameOver() {
    this.fetchAudioAndPlay(gameOverAudio);
  }

  win() {
    this.fetchAudioAndPlay(gameWinAudio);
  }

  newLevel() {
    this.fetchAudioAndPlay(newLevelAudio);
  }

  pause() {
    this.fetchAudioAndPlay(gamePausedAudio, true);
  }

  decreaseLives() {
    this.fetchAudioAndPlay(decreaseLivesAudio);
  }

  mediaMuted(isMuted: boolean) {
    const media = document.querySelector('audio') as HTMLAudioElement;

    if (media) {
      isMuted ? (media.volume = 0) : (media.volume = 0.75);
    }
  }

  fetchAudioAndPlay(audio: string, loop = false) {
    const media = document.querySelector('audio') as HTMLAudioElement;

    media.src = audio;
    media.loop = loop;
    media.play();
  }
}
