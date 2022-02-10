console.log("are you woking?")



//// linking ids to status scores
const feedEl = document.querySelector("#hunger_num");
const sleepEl = document.querySelector("#sleep_num");
const playEl = document.querySelector("#mood_num");
const levelEl = document.querySelector("#level_num");

const feedMsg = document.querySelector("#msg_hunger");
const sleepMsg = document.querySelector("#msg_sleep");
const moodMsg = document.querySelector("#msg_mood");
////  linking ids to user buttons
const food_btn  = document.querySelector('#food_btn');
const sleep_btn = document.querySelector('#sleep_btn');
const play_btn = document.querySelector('#play_btn');
const star_btn = document.querySelector('#star_btn');


const monsterImg = document.querySelector('.Monster') // first monster

const monsterImg2 = document.querySelector(".Monster2"); // monster level 2
monsterImg2.remove() //this line hide level up monster

const monsterImg3 = document.querySelector(".Monster3"); // monster level 2
monsterImg3.remove() //this line hide level up monster

const gameOver = document.querySelector(".rip");
gameOver.remove()

/// setbase scores at 9 for testing
let food_num = 9;
let sleep_num = 9;
let mood_num = 9;
let level_num = 1;



feedEl.innerHTML = food_num;
sleepEl.innerHTML = sleep_num;
playEl.innerHTML = mood_num;
levelEl.innerHTML = level_num;


star_btn.addEventListener('click', (e) => {
    console.log("star work")
})

/// set click event of feed to add scores
food_btn.addEventListener('click', (e) => {
    food_num += 1;
    if (food_num > 10) {      /// set limit scores
        return food_num += 0;
        
    }
    feedEl.innerHTML = food_num;
    
});
  
/// set click event of sleep to add scores
  sleep_btn.addEventListener('click', (e) => {
    sleep_num += 1;
    if (sleep_num > 10) {
        return sleep_num += 0;
    }
    sleepEl.innerHTML = sleep_num;
  });
////set click event of play to add scores
  play_btn.addEventListener('click', (e) => {
    mood_num += 1;
    if (mood_num > 10) {
        return mood_num += 0;
    }

    playEl.innerHTML = mood_num;
  });


  let statusInterval = setInterval(function(){
    
    food_num -= 1;
    sleep_num -= 1;
    mood_num -= 1;

    feedEl.innerHTML = food_num;
    sleepEl.innerHTML = sleep_num;
    playEl.innerHTML = mood_num;


    if(food_num <= 0 || sleep_num <= 0 || mood_num <= 0){
        clearInterval(statusInterval)
        feedMsg.innerHTML = " I'm too hungry now I'm death"
        sleepMsg.innerHTML = " I'm just gonna sleep somewhere else"
        moodMsg.innerHTML = " I'm done with you goodbye"
        monsterImg.innerHTML = gameOver.innerHTML
    }

}, 3000)


    let levelUpInterval = setInterval(function(){
        monsterImg.innerHTML = monsterImg2.innerHTML
        levelEl.innerHTML = 2
        if(food_num <= 0 || sleep_num <= 0 || mood_num <= 0){
            clearInterval(statusInterval)
            monsterImg.innerHTML = gameOver.innerHTML
        }

    }, 8000)


   

    let levelUpInterval1 = setInterval(function(){
        monsterImg2.innerHTML = monsterImg3.innerHTML
        levelEl.innerHTML = 3
        if(food_num <= 0 || sleep_num <= 0 || mood_num <= 0){
            clearInterval(statusInterval)
            monsterImg.innerHTML = gameOver.innerHTML
        }

    }, 8000)


    