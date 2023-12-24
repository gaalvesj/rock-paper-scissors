import { useState } from "react";
import { useNavigate } from "react-router-dom";



function Play() {
    const [winner, setWinner] = useState('')
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

      const navigate = useNavigate();
    
    const  handlerClick = () => {
        
        navigate('/game');
    }

    
      
    
    
    
      const game =  (playerMove) => { 
    
        const computerMove = {
          get numero() {
              return Math.floor(Math.random() * 3) + 1;
          }
      };
      let computerMoveType = ''
        switch(computerMove.numero){
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
    
        const validationPlayer = possibleMoves.find((current) => current.type === playerMove);
    
        const isPlayerWinner = validationPlayer.wins === computerMoveType
    
        isPlayerWinner ? setWinner('Player') : setWinner('Computer');
          
      }

      return (
        <div>
        <button onClick={() => game('rock')}>rock</button>
        <button onClick={() => game('paper')}>paper</button>
        <button onClick={() => game('scissors')}>scissors</button>
        <h1>{winner}</h1>
        <button onClick={() =>handlerClick() }> Score </button>
        </div>
        
      )
    

}

export default Play;