// Apps ScriptでデプロイしたウェブアプリのURL
        // YOUR_WEB_APP_URLをコピーしたURLに置き換えてください
        const apiUrl = 'https://script.google.com/macros/s/AKfycby-WANipTuihhGTu7OvhSCvnT90eMp8CpJPi4PpkunLnlgSt07fQ-v3MGmMeE57lBkU/exec';

        document.addEventListener('DOMContentLoaded', () => {
            const currentVersionElement = document.querySelector('.current-version');
            if (!currentVersionElement) return;

            const currentVersion = currentVersionElement.textContent.trim();
            
            fetch(apiUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('ネットワーク応答が正常ではありませんでした');
                    }
                    return response.json();
                })
                .then(data => {
                    const latestVersion = data.latest_version;
                    
                    if (currentVersion !== latestVersion) {
                        // バージョンが一致しない場合に通知を表示
                        alert(`新しいバージョンが利用可能です！\n現在のバージョン: ${currentVersion}\n最新バージョン: ${latestVersion}`);
                    }
                })
                .catch(error => {
                    console.error('バージョン情報の取得中にエラーが発生しました:', error);
                });
             });
