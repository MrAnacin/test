import YouTube from 'react-youtube';

export default function YouTubeLink({ videoId }) {
    const opts = {
      height: '639',
      width: '1160',
      playerVars: {
        // Поместите здесь свои настройки плеера YouTube, если необходимо
      },
    };
    return (
        <div>
          <YouTube videoId={videoId} opts={opts} />
        </div>
      );
    }
   