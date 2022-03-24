//랜덤 번호 지정

//유저가 번호를 입력한다, 그 후 go버튼 누름
//만약 유저가 번호를 맞추면 맞췄습니다.

//랜덤번호 < 유저번호 down
//랜덤번호 > 유저번호 up

//reset 버튼 누르면 게임 리셋

//5번의 기회를 다 쓰면 게임 끝(더이상 입력 못하게 버튼 disable)

//유저가 1~100 범위 밖의 숫자를 입력하면 범위 초과했다고 알려줌(기회 소진x)
//유저가 이미 입력한 숫자 다시 입력하면 알려줌(기회 소진x)

let randomNum =0
let playButton = document.getElementById('play-button') 
let userInput = document.getElementById('user-input')
let resultArea = document.getElementById('result-area')

playButton.addEventListener("click", play)

function pickRandomNum(){
    randomNum = Math.floor(Math.random()*100) + 1
}

function play(){
    let userValue = userInput.value

    if(userValue < randomNum){
        resultArea.textContent = 'up'
    }else if(userValue > randomNum){
        resultArea.textContent = 'down'

    }else{
        resultArea.textContent = 'right'

    }

}

pickRandomNum()