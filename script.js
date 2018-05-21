// create a variable
var score = 0;
var heldScore = 0;
var heldScore2 = 0
var player = 1;
//Returns the first or group of elements that match the specified selector '.dice'. We give the dice display: none.
//document.querySelector('.dice').style.display = 'none';

//Target and change the textcontent of the score id element.
document.querySelector('#score').textContent = '0' ;


document.querySelector('.btn-roll').addEventListener('click', function(){
    if(player == 1){
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        const diceDom = document.querySelector('.dice');
        const diceDom2 = document.querySelector('.dice2')

        diceDom.style.display = 'block';
        diceDom2.style.display = 'block';

        diceDom.src = 'img/dice' + dice + '.png';
        diceDom2.src = 'img/dice' + dice2 + '.png';

        if(dice !== 1){
            score = score + dice + dice2;
            document.querySelector('#score').textContent = score;
        } 
        else{
            score = 0
            heldScore = 0
            document.querySelector('#score').textContent = score;
            document.querySelector('#hold').textContent = heldScore;
        }
    }
    else{
        var dice3 = Math.floor(Math.random() * 6) + 1;
        var dice4 = Math.floor(Math.random() * 6) + 1;

        const diceDom3 = document.querySelector('.dice3');
        const diceDom4 = document.querySelector('.dice4')

        diceDom3.style.display = 'block';
        diceDom4.style.display = 'block';

        diceDom3.src = 'img/dice' + dice3 + '.png';
        diceDom4.src = 'img/dice' + dice4 + '.png';

        if(dice3 !== 1){
            score = score + dice3 + dice4;
            document.querySelector('.score2').textContent = score;
        } 
        else{
            score = 0
            heldScore2 = 0
            document.querySelector('.score2').textContent = score;
            document.querySelector('.hold2').textContent = heldScore2;
        }

    }
})

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if(player == 1){
        heldScore = heldScore + score 
        score = 0
        document.querySelector('#hold').textContent = heldScore;
        document.querySelector('#score').textContent = score;
        

        if(heldScore >= 100){
            document.querySelector('#hold').textContent = 'Win';
        }

        player = 2
    }
    else{
        heldScore2 = heldScore2 + score 
        score = 0
        document.querySelector('.hold2').textContent = heldScore2;
        document.querySelector('.score2').textContent = score;

        if(heldScore2 >= 100){
            document.querySelector('.hold2').textContent = 'Win';
        }

        player = 1

    }
    
    
})
