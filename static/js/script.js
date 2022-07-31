// Challenge 1: your Age in days

function ageindays(){

var birthyear=prompt("What year you were born");
var ageindayss = (2021-birthyear)*365;
var h1= document.createElement('h1');
var textanswer=document.createTextNode('you are ' + ageindayss + ' days old');
h1.setAttribute('id','ageindays');
h1.appendChild(textanswer);
document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageindays').remove();
}


function generatecat(){
    var image= document.createElement('img');
    var div= document.getElementById('flex-cat-gen');
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}

//Challenge 3: Rock Paper Scissors
function rpsGame(yourchoice) {
 console.log(yourchoice);   
 
 var humanchoice,botchoice;
 humanchoice= yourchoice.id;

 botchoice= numbertochoice(randomtorpsint());
 console.log('computerchoice', botchoice);
 //console.log(botchoice);
 
 results= decidewinner(humanchoice, botchoice); //[0,1] human lost bot won
console.log(results);
 
message = finalmessage(results); // {'message': 'you won!','color'='green'}
console.log(message);

rpsfrontend(yourchoice.id,botchoice,message);
}

function randomtorpsint(){
    return Math.floor(Math.random()*3);
}

function numbertochoice(number) {
    return ['rock','paper','scissors'][number]
}

function decidewinner(yourchoice, computerchoice){
    var rpsdatabase = {
        'rock': {'scissors':1, 'rock': 0.5, 'paper':0},
        'paper': { 'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'paper':1, 'scissors': 0.5, 'rock':0}
     }
     var yourscore = rpsdatabase[yourchoice][computerchoice];
     var computerscore = rpsdatabase[computerchoice][yourchoice];
    
     return [yourscore, computerscore];
    }

    function finalmessage([yourscore]){
        if(yourscore === 0) {
            return{ 'message': 'You lost', 'color': 'red'}
        } else if (yourscore === 0.5){
            return { 'message': 'You tied', 'color': 'yellow'}
        } else {
            return { 'message': 'You won','color': 'green'}
        }
    }

    function rpsfrontend(humanimagechoice, botimagechoice, finalmessage) {
        var imagesdatabase = {
            'rock': document.getElementById('rock').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src
        }

        // Lets remove all the images
        document.getElementById('rock').remove();
        document.getElementById('paper').remove();
        document.getElementById('scissors').remove();


        var humandiv = document.createElement('div');
        var botdiv = document.createElement('div');
        var messagediv = document.createElement('div');

     humandiv.innerHTML = "<img src='" + imagesdatabase[humanimagechoice] +"' height=150 width=150 style = 'box-shadow: 0px 10 px 50px rgba(37, 50, 233, 1)';>"
     messagediv.innerHTML = "<h1 style ='color:" + finalmessage['color'] + ";  font-size: 60px; padding: 30px; '>" + finalmessage['message'] +"</h1>"
     botdiv.innerHTML = "<img src ='"+ imagesdatabase[botimagechoice] + "' height =150 width=150 style=  'box-shadow: 0px 10 px 50px rgba(243, 38, 24, 1)';>"
    
     document.getElementById('flex-box-rps-div').appendChild(humandiv);
     document.getElementById('flex-box-rps-div').appendChild(messagediv);
     document.getElementById('flex-box-rps-div').appendChild(botdiv);
}

// Challenge 4: Change the color of all buttons
var allbuttons=document.getElementsByTagName('button');
console.log(allbuttons);

var copyallbuttons = [];
for (let i=0; i<allbuttons.length; i++){
copyallbuttons.push(allbuttons[i].classList[1]);
}



function buttoncolorchange(buttonthingy){
if(buttonthingy.value === 'red'){
    buttonRed();
 } else if (buttonthingy.value === "green"){
    buttonGreen();
 } else if (buttonthingy.value === 'reset'){
    buttonReset();
 }else if (buttonthingy.value === 'random'){
    randomcolors();
 }
}

function buttonRed() {
    for (let i=0; i<allbuttons.length; i++){
     allbuttons[i].classList.remove(allbuttons[i].classList[1]);
     allbuttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i=0; i< allbuttons.length; i++){
     allbuttons[i].classList.remove(allbuttons[i].classList[1]);
     allbuttons[i].classList.add('btn-success');
    }
}

function buttonReset(){
    for(let i=0; i<allbuttons.length; i++){
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add(copyallbuttons[i]);
    }
}


function randomcolors(){
    let choices= ['btn-primary','btn-danger','btn-success','btn-warning']
    for(let i=0;i<allbuttons.length;i++){
    let randomnumber=Math.floor(Math.random()*4);
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add(choices[randomnumber]);
}
}