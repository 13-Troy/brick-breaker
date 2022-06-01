export function mediaApi(audio: string, loop = false) {
  const media = document.querySelector('audio') as HTMLAudioElement | null;

  if (!media) {
    const media = document.createElement('audio');

    document.body.appendChild(media);
    fetchAudioAndPlay(media, audio, loop);
  } else {
    fetchAudioAndPlay(media, audio, loop);
  }
}

function fetchAudioAndPlay(
  media: HTMLAudioElement,
  audio: string,
  loop: boolean
) {
  fetch(audio)
    .then((response) => {
      media.src = response.url;
      media.loop = loop;

      return media.play();
    })
    .then((_) => {
      media.play();
    })
    .catch((e) => {
      console.log(e);
    });
}

export function mediaMuted(isMuted: boolean) {
  const media = document.querySelector('audio') as HTMLAudioElement;

  if (media) {
    isMuted ? (media.volume = 0) : (media.volume = 0.75);
  }
}
