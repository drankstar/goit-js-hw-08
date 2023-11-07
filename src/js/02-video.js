import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = throttle(data => {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
}, 1000);

const currentTimeStorage = localStorage.getItem('videoplayer-current-time');
const currentTime = currentTimeStorage ? JSON.parse(currentTimeStorage) : 0;
player.setCurrentTime(currentTime);
player.on('timeupdate', onPlay);
