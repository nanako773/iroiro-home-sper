// 右クリックの場合
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  console.log('右クリックは禁止されています。');
});

// Ctrl + Shift + C の場合
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.key === 'C') {
    event.preventDefault();
    console.log('開発者ツールの使用は禁止されています。 ');
  }
});

// Ctrl + Shift + L の場合
document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.shiftKey && event.key === 'L') {
    event.preventDefault();
    console.log('このショートカットは禁止されています。');
  }
});


let inactivityTimeout;
const inactivityTime = 120000; // 2分 (ミリ秒)

function resetInactivityTimer() {
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(showAlert, inactivityTime);
}

function showAlert() {
  alert('2分間操作がありませんでした。　何やってるんですか?勉強してください。');
  // ここでアラート表示後の処理を追加することもできます
  resetInactivityTimer(); // アラート後もタイマーをリセット（任意）
}

// ページが読み込まれたときと、ユーザーが何らかの操作をしたときにタイマーをリセット
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('keydown', resetInactivityTimer);
document.addEventListener('scroll', resetInactivityTimer);
document.addEventListener('click', resetInactivityTimer);
document.addEventListener('touchstart', resetInactivityTimer);
document.addEventListener('touchmove', resetInactivityTimer);

// 最初のタイマーを開始
resetInactivityTimer();


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


const body = document.body;
const messageEl = document.querySelector('.message');

function updateTime() {
    const now = new Date();
    const hours = now.getHours();

    let timeOfDay;
    let messageText;

    if (hours >= 4 && hours < 6) {
        timeOfDay = 'dawn';
        messageText = '夜明けです。新しい一日が始まります。🌅';
    } else if (hours >= 6 && hours < 10) {
        timeOfDay = 'morning';
        messageText = 'おはようございます。朝の光が気持ちいいですね。🌞';
    } else if (hours >= 10 && hours < 14) {
        timeOfDay = 'noon';
        messageText = '昼です。活気あふれる時間帯です。✨';
    } else if (hours >= 14 && hours < 17) {
        timeOfDay = 'afternoon';
        messageText = '午後のひととき。少し休憩しませんか。☕';
    } else if (hours >= 17 && hours < 18) {
        timeOfDay = 'evening';
        messageText = '夕方です。空がオレンジ色に染まります。🌆';
    } else if (hours >= 18 && hours < 20) {
        timeOfDay = 'dusk';
        messageText = '黄昏時です。美しい夕焼けが見えるかもしれません。🌇';
    } else {
        timeOfDay = 'night';
        messageText = '夜です。静かな時間が流れています。🌃';
    }

    body.className = timeOfDay;
    messageEl.textContent = messageText;
}

// 1分ごとに更新
setInterval(updateTime, 60000);
updateTime();



if (Math.random() < 1/100) {
  // 100分の1の確率で実行したい処理
  alert('100分の1だよすごいね！');
}

if (Math.random() < 1/1000) {
  // 100分の1の確率で実行したい処理
  window.location.href = 'kinenn/kinenn.html';
}

