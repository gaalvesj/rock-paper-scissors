import Footer from "./Footer";
import { useState } from "react";



function Play() {

    const [winner, setWinner] = useState('')
    const [score, setScore] = useState(0)
    const [possibleMoves, setPossibleMoves] = useState([
        {
          type: 'paper',
          label: 'paper',
          wins: 'rock',
          loses: 'scissors'
        },
        {
          type: 'rock',
          label: 'rock',
          wins: 'scissors',
          loses: 'paper'
        },
        {
          type: 'scissors',
          label: 'scissors',
          wins: 'paper',
          loses: 'rock'
        }
    
      ]);

      const computerMove = { get number() {return Math.floor(Math.random() * 3) + 1 } };


     const game =  (playerMove) => { 
      let computerMoveType = ''
        switch(computerMove.number){
          case 1: 
            computerMoveType = 'paper'
          break;
          case 2:
            computerMoveType = 'rock'
          break;
          case 3:
            computerMoveType = 'scissors';
          break;
        }
        if(computerMoveType === playerMove) {
          return setWinner('draw');
        }
    
        const validationPlayer = possibleMoves.find((e) => e.type === playerMove);
    
        const isPlayerWinner = validationPlayer.wins === computerMoveType
    

        if(isPlayerWinner){
          setWinner('Player')
          setScore(score +1)
        }
        else {
          setWinner('Computer')
        }

      }

      return (
        <div>
        <button onClick={() => game ('rock')}>rock</button>
        <button onClick={() => game ('paper')}>paper</button>
        <button onClick={() => game ('scissors')}>scissors</button>
        <h1>
        {setPossibleMoves}
        {score}
        </h1>
        <h1>
            {winner}
        </h1>
        <Footer />
        </div>
        
      )
    

}

export default Play;