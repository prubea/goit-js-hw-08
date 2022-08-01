import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(({ seconds }) => {
    localStorage.setItem("videoplayer-current-time", `${seconds}`);
    
}, 1000));

const actualTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(actualTime).then(function (seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });

player.setVolume(0);

player.on('play', function() {
    console.log('played the video!');
});