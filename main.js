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
let userInput = document.getElementById('user-input')
let resultArea = document.getElementById('result-area')
let chanceArea = document.getElementById('chance-area')
let playButton = document.getElementById('play-button') 
let resetButton = document.getElementById('reset-button')

let chances = 5;
let gameOver = false;

let history = []

playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", erase)

function erase(){
    userInput.value = ""
}

function pickRandomNum(){
    randomNum = Math.floor(Math.random()*100) + 1
    console.log(randomNum)
}

function play(){

    let userValue = userInput.value
   
    if(userValue < 1 || userValue > 100){
        alert('범위 외의 값입니다(1~100까지 숫자 허용)')
        return
    }

    if(history.includes(userValue)){
        alert('이미 입력했던 숫자입니다. 다른 숫자를 입력하세요')
        return
    }

    chances--
    chanceArea.textContent = `${chances}번의 기회가 남았습니다.`

    if(userValue < randomNum){
        resultArea.textContent = 'up'
    }else if(userValue > randomNum){
        resultArea.textContent = 'down'
    }else{
        resultArea.textContent = 'right'
        gameOver = true
    }
    
    history.push(userValue) 

    if(chances < 1){
        gameOver = true
       }
    if(gameOver == true){
        playButton.disabled = true
        chanceArea.textContent="게임 오버"
    }
}

function reset(){
    //user input창을 비워주고
    erase()
 
    //새로운 번호가 생성되어야
    pickRandomNum(); 
    chances = 5
    chanceArea.textContent = `${chances}번의 기회가 남았습니다.`
    resultArea.textContent="결과값이 이 곳에 출력됩니다."
    history = []
}

pickRandomNum()