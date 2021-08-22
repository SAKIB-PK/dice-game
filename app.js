

// select 2 player img dom
let player1 = document.querySelector('.img1')
let player2 = document.querySelector('.img2')
//insert image into dom 

 // dom selection 
 let sequence1 = Math.floor(Math.random() *6)+1 //creates 1-6 random sequence number
 let sequence2 = Math.floor(Math.random() *6)+1 //creates 1-6 random sequence number
 let url1 = `images/dice${sequence1}.png` //ex.images/dice(1-6).png
 let url2 = `images/dice${sequence2}.png` //ex.images/dice(1-6).png
 player1.setAttribute('src',url1)
 player2.setAttribute('src',url2)
 //check who's win this game 
 if(sequence1>sequence2){
     document.querySelector('h1').textContent = 'Player 1 is won !'
 }else if(sequence2 == sequence1){
    document.querySelector('h1').textContent = 'Match Draw !'
 }else{
    document.querySelector('h1').textContent = 'Player 2 is won !'
 }
   
    

