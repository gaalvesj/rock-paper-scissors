import Footer from "./Footer";
import { useState } from "react";
import { StyledButton } from "../styles/styledComponents"



function Play() {

    const [winner, setWinner] = useState('')
    const [scorePlayer, setScorePlayer] = useState(0)
    const [scoreMachine, setScoreMachine] = useState(0)
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
          setWinner('You')
          setScorePlayer(scorePlayer +1)
        }
        else {
          setWinner('Lose')
          setScoreMachine(scoreMachine +1)
        }

      }

      return (
        <div className="flex flex-col place-items-center">
        <h1 className="px-8">
          Player: {scorePlayer}  x Computer: {scoreMachine}
        </h1>
        <h1>{winner}</h1>
   
        <section className="container bg-white">

        <button><img className="game-table" src="https://img1.gratispng.com/20180705/hyf/kisspng-rockpaperscissors-computer-icons-clip-art-paper-scissors-5b3e12878e2b96.0189175815307946315823.jpg" alt="rock" onClick={() => game ('rock')} /></button>
        <button><img className="game-table" src="https://cdn.icon-icons.com/icons2/3194/PNG/512/hand_paper_icon_194460.png " alt="paper" onClick={() => game ('paper')} /></button>
        <button><img className="game-table" src="https://w7.pngwing.com/pngs/145/98/png-transparent-computer-icons-scissors-hand-scissors-text-hand-technic.png" alt="scissors" onClick={() => game ('scissors')} /></button>
        <Footer />
        </section>
        </div>


        
      )
    

}

export default Play;