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

const currentTime = JSON.parse(
  localStorage.getItem('videoplayer-current-time')
);

player.setCurrentTime(currentTime);
player.on('timeupdate', onPlay);
