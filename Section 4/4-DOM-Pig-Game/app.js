/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var s1,s2,rsc,activePlayer,roll;

s1=0;
s2=0;
rsc=0;
activePlayer=0;

roll=Math.floor(Math.random()*6)+1;

document.querySelector('#current-0').textContent = roll;