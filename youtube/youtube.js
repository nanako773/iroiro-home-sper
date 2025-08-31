const API_KEY = 'YOUR_API_KEY'; // ここに取得したAPIキーを貼り付けます
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsDiv = document.getElementById('results');

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const query = searchInput.value;
    searchYouTubeVideos(query);
});

async function searchYouTubeVideos(query) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        displayResults(data.items);
    } catch (error) {
        console.error('APIの取得に失敗しました:', error);
        resultsDiv.innerHTML = '<p>検索中にエラーが発生しました。時間をおいて再度お試しください。</p>';
    }
}

function displayResults(videos) {
    resultsDiv.innerHTML = ''; // 以前の結果をクリア

    if (videos.length === 0) {
        resultsDiv.innerHTML = '<p>該当する動画が見つかりませんでした。</p>';
        return;
    }

    videos.forEach(video => {
        const videoId = video.id.videoId;
        const title = video.snippet.title;
        const thumbnailUrl = video.snippet.thumbnails.high.url;
        const channelTitle = video.snippet.channelTitle;
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <img src="${thumbnailUrl}" alt="${title}">
            <div class="video-details">
                <h3><a href="${videoUrl}" target="_blank">${title}</a></h3>
                <p>チャンネル: ${channelTitle}</p>
                <p>URL: <a href="${videoUrl}" target="_blank">${videoUrl}</a></p>
            </div>
        `;
        resultsDiv.appendChild(videoItem);
    });
}