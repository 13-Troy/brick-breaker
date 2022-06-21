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
  tracks: any;
  constructor() {
    super();
    this.tracks = new Audio(gameStartAudio);
  }

  collect() {
    this.play(collectAudio);
  }

  beat() {
    this.play(beatAudio);
  }

  start() {
    this.play(gameStartAudio);
  }

  gameOver() {
    this.play(gameOverAudio);
  }

  win() {
    this.play(gameWinAudio);
  }

  newLevel() {
    this.play(newLevelAudio);
  }

  pause() {
    this.play(gamePausedAudio);
  }

  decreaseLives() {
    this.play(decreaseLivesAudio);
  }

  muted(isMuted: boolean) {
    const media = document.querySelectorAll('audio');
    media.forEach(track =>  isMuted ? track.volume =0 : track.volume = 0.75 )
  }

  play(audio: string) {
    if (this.tracks[audio]) {
      this.tracks[audio].play();
      return;
    }

    const media = document.createElement('audio') as HTMLAudioElement;
    
    media.src = audio;
    document.body.appendChild(media)

    this.tracks[audio] = media
    media.play();
  }
}
