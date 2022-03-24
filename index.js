const setofwords= [
    "To find out how fast you type, just start typing in the blank textbox on the right of the test prompt. You will see your progress including errors on the left side as you type.",
    "You can fix errors as you go or correct them at the end with the help of the spell checker If you need to restart the test delete the text in the text box Interactive feedback shows you your current wpm and accuracy.",
    "In order to complete the test and share your results you need to get 100% accuracy You can review your progress for this session with the feedback chart below Just hover over a dot to see what your average speed and accuracy are for that key."
];

let msg= document.getElementById('msg');
const typeWords = document.getElementById('mywords');
const btn= document.getElementById('btn');
let startTime, endTime;
const playGames=()=>{
    let randomNumber = Math.floor(Math.random()*setofwords.length);
    msg.innerText = setofwords[randomNumber];
    let date= new Date();
    startTime= date.getTime();
    btn.innerText= "Done";
}
const endPlay=()=>{
    let date= new Date();
    endTime= date.getTime();
    let totalTime=((endTime-startTime)/1000);
    
    let totalStr= typeWords.value;
    let wordCount= wordCounter(totalStr);

    let speed = Math.round((wordCount/totalTime)*60);

    let finalMsg= "You typed total at "+speed+ " words per minutes."
    
    finalMsg +=compareWords(msg.innerText, totalStr);
    msg.innerText= finalMsg;

}
const compareWords= (str1, str2)=>{
    let words1= str1.split(" ");
    let words2= str2.split(" ");
    let cnt= 0;

    words1.forEach(function(item,index){
        if(item ==words1[index]){
            cnt++;
        }
    })

    let errorWords = (words2.length-cnt);
    
    return (cnt+" correct out of "+words1.length+" words and the total number of error are "+errorWords +".");
}
const wordCounter =(str)=>{
    let response = str.split(" ").length;
    return response;
}

btn.addEventListener('click',function(){
    console.log(this);
    if(this.innerText == 'Start'){
        typeWords.disabled=false;
        playGames();
    }
    else if(this.innerText == "Done"){
        typeWords.disabled=true;
        btn.innerText="Start";
        endPlay();
    }
})

