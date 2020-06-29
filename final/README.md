## 前端程式設計｜期末專題
### 網址：http://yuu317.github.io/final
### 專題簡介 Hangman

* 專案執行環境：
  * 在 head 中加上 "<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">"，（因為若在https頁面裡動態引入一http資源（我這裡是引入一個js檔案）會被瀏覽器拒絕，因此加入這段程式碼，將http的不安全請求升級為https。）
* 遊戲說明：
> 選擇遊戲類別以後，系統會隨機挑選出一個英文單字，並顯示出與該單字長度相同的方格數。玩家需點選底下的鍵盤按鈕，若所猜的字母有包含在單字內，則該字母會顯示在正確的位置，若無，則 Hangman 多一筆畫。當畫完整個 Hangman（即總共猜錯十次）還尚未猜到單字時，則失敗，反之即成功。
* 遊戲首頁（進入遊戲前）：
  * 套用 Boostrap 的簡易模板（Source：https://html5up.net/ ）
  * 新增按鈕，加入多個遊戲選項（Job/Fruit/Sport）
  * 使用 Font Awesome Icons
  * 使用 Favicon
  
* 遊戲畫面：
  * 自行用簡易繪圖軟體畫出遊戲背景以及 Hangman
  * 鍵盤按鈕用粉紅色呈現，當滑鼠在按鈕上時，會稍微放大且變為淺粉紅色，若已按過則變為灰色
  * 遊戲結束後，Play again 的按鈕為綠色，當滑鼠在按鈕上時則變為粉紅色，較為醒目
  * 使用 Favicon
  
* 程式邏輯：
  * 用 random 隨機挑選一個英文單字
  * 利用 append 畫出與所選單字長度相同的方格數，並將字母與方格設成同一顏色（玩家於此時看不見字母）
  * 設置鍵盤之按鈕，若已按過則 addClass("used")，並由粉紅色轉為灰色
  * 利用 if 迴圈以及條件式 userGuess === randomWord.charAt(i)，逐一判斷玩家所按之字母是否包含在單字中
  * 若有，則將正確的字母由原先與方格相同之顏色改成黑色（此時玩家即可看見該字母），
  * 若無，則 Hangman 多一筆畫（我將每一步驟的 Hangman 都單獨做成一張圖，再使用 $("#hangman").attr("src", "hangman/img/" + wrongGuesses + ".JPG")
  * 每答錯一次，wrongGuesses+=1，當答錯次數達10次（即畫完整個 Hangman），則玩家失敗
  * 每答對一次，goodGuesses+=1，當 goodGuesses.length 與單字長度相同時，則玩家獲勝
  * 遊戲結束後，若點選 Play again 的按鈕，則將網頁導回遊戲首頁，並重新選擇遊戲類別
  
### 使用的程式語言
* HTML
* CSS
* JavaScript/jQuery

