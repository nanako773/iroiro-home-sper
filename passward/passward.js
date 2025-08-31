        function checkPassword() {
            // 入力されたパスワードを取得
            const password = document.getElementById("passwordInput").value;

            // --- パスワードと遷移先をセットで定義します ---
            const passwordMap = {
                "kinenn": "../kinenn/kinenn.html", 
                "youtubeacount": "https://youtube.com/@なぎなチャンネル",
                "sakanasuki": "fish_page.html" 
            };
            
            // 入力されたパスワードがオブジェクトのキーに存在するかチェック
            const destinationPage = passwordMap[password];

            if (destinationPage) {
                // キーが存在する場合（パスワードが正しい場合）
                window.location.href = destinationPage;
            } else {
                // キーが存在しない場合（パスワードが間違っている場合）
                alert("パスワードが違います");
            }
        }