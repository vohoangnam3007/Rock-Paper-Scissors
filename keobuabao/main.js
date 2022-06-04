// declare

var userScore = 0;
var compScore = 0;
var liveScore = document.querySelector('.live-score__text');
var imgEdit = document.querySelectorAll('.img-edit')
var paper = document.querySelector('.paper')
var scissors = document.querySelector('.scissors')
var rock = document.querySelector('.rock')
var playNoti = document.querySelector('.play-noti')
var userPlay = [rock, paper, scissors]
var compPlay = ['rock', 'paper', 'scissors']
var movesLeft = document.querySelector('.move-left')
var moves = 0;
var reloadBtn = document.querySelector('.reload-btn')


// random function
function myRandom(n) {
    const random = Math.random() * n;
    const result = Math.round(random)
    return result;
}

// reload function

function reload() {
    window.location.reload();
}

// Stop the game
function exitGame() {
    return;
}


// Play function 
function play() {
    
    playNoti.textContent = 'Play Game !'
    
    liveScore.textContent = userScore + ' ' + ':' + ' ' + compScore
         
    function game() {
        rock.addEventListener('click', function(e) {
        var result = compPlay[myRandom(2)]
        console.log(result)
            
          
            if( result === 'rock') {
                playNoti.textContent = 'Draw'
                liveScore.textContent = userScore + ' ' + ':' + ' ' + compScore
            }
                
            if( result === 'paper') {
                compScore = compScore + 1;
                playNoti.textContent = 'You Lose'
                liveScore.textContent = userScore + ' ' + ':' + ' ' + compScore
            
            }
            
            if( result === 'scissors') {
            
                userScore = userScore + 1;
                playNoti.textContent = 'You Win'
                liveScore.textContent = userScore + ' ' + ':' + ' ' + compScore
            }
            
        })
    
        paper.addEventListener('click', function(e) {
        var result = compPlay[myRandom(2)]
        console.log(result)
            
            
    
            if( result === 'paper') {
                playNoti.textContent = 'Draw'
                liveScore.textContent = userScore + ' ' + ':' + ' ' + compScore
            }
                
            if( result === 'scissors') {
                compScore = compScore + 1;
                playNoti.textContent = 'You Lose'
                liveScore.textContent = userScore + ' ' + ':' + ' ' + compScore
            }
            
            
            if( result === 'rock') {
            
                userScore = userScore + 1;
                playNoti.textContent = 'You Win'
                liveScore.textContent = userScore + ' ' + ':' + ' ' + compScore
            }
            
        })
    
        scissors.addEventListener('click', function(e) {
        var result = compPlay[myRandom(2)]
        console.log(result)
            
            
    
            if( result === 'scissors') {
                playNoti.textContent = 'Draw'
                liveScore.textContent = userScore + ' ' + ':' + ' ' + compScore
            }
                
            if( result === 'rock') {
                compScore = compScore + 1;
                playNoti.textContent = 'You Lose'
                liveScore.textContent = userScore + ' ' + ':' + ' ' + compScore
            
            }
            
            if( result === 'paper') {
            
                userScore = userScore + 1;
                playNoti.textContent = 'You Win'
                liveScore.textContent = userScore + ' ' + ':' + ' ' + compScore
            }
            
        })
        userPlay.forEach(function(value) {
    
            value.addEventListener('click',function(e){
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}` 
                if(moves === 10) {
             
                   if(userScore > compScore) {
                    playNoti.textContent = 'Hen vl'
                   } else if (userScore < compScore) {
                    playNoti.textContent = 'Ga'
                   } else {
                    playNoti.textContent = 'Hoa Minzy'
                   }
                   reloadBtn.style.display = 'block'
                   rock.style.display = 'none'
                   paper.style.display = 'none'
                   scissors.style.display = 'none'
                   
              
                }
           })
        })
    }
    game()
       
    }
    
    play();

    
   







    
    
    
    
    
    
    
               
                
                

    
    
    




    
        
        
    
    

       
    
        
        
    
    









