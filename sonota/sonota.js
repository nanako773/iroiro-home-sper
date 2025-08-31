document.addEventListener('DOMContentLoaded', () => {
    // すべての再生ボタンと停止ボタンを取得
    const playButtons = document.querySelectorAll('.play-btn');
    const pauseButtons = document.querySelectorAll('.pause-btn');

    // 他のメディアをすべて停止する関数
    function stopAllMedia(currentMedia) {
        // すべてのaudioタグとvideoタグを取得
        const allMedia = document.querySelectorAll('audio, video');
        allMedia.forEach(media => {
            if (media !== currentMedia) {
                media.pause();
                media.currentTime = 0; // 再生位置を最初に戻す
            }
        });
    }

    // 再生ボタンにクリックイベントを追加
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mediaId = button.dataset.mediaId;
            const mediaElement = document.getElementById(mediaId);
            
            if (mediaElement) {
                stopAllMedia(mediaElement); // 他のメディアを停止
                mediaElement.play();
            }
        });
    });

    // 停止ボタンにクリックイベントを追加
    pauseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const mediaId = button.dataset.mediaId;
            const mediaElement = document.getElementById(mediaId);
            
            if (mediaElement) {
                mediaElement.pause();
            }
        });
    });
});
