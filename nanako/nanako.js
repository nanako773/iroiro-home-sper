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