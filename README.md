# Table of Contents
__________________________________________________________________________________________________________________________________________________________
<ol dir='auto'>
  <li> 
    <a href="#1-overview">Overview</a>
  </li>
  <li>
    <a href="#2-components">Components</a>
  </li>
  <li>
    <a href="#3-gameLogic">Game Logic</a>
  </li>
  <li>
    <a href="#4-projectStructure">projectStructure</a>
  </li>
  <li>
    <a href="#5-deployment">Deployment</a>
  </li>
  <li>
    <a href="#6-howToRun">how to run/</a>
  </li>
  <li>
    <a href="#7-contact">Contact</a>
  </li>

</ol>

# Jo Ken Po Game in React

<a href="https://rock-paper-scissors-nko0538xl-gaalvesjs-projects.vercel.app">Check the app demo</a>

<img style="max-width: 100%" alt="home" src="https://github.com/gaalvesj/rock-paper-scissors/assets/23504396/1972f9a1-dfce-42da-8a89-d19d2ebe633b">
<img style="max-width: 100%" alt="game" src="https://github.com/gaalvesj/rock-paper-scissors/assets/23504396/46dff7a4-a756-4394-bfda-3c1eb46a7e0b">
<img style="max-width: 100%" alt="rules" src="https://github.com/gaalvesj/rock-paper-scissors/assets/23504396/be6e1ab7-82e6-4128-bf24-60e3073dc2ee">

# 1. Overview 
<p  href="#1-overview" >This project is a React-based implementation of the classic Jan Ken Pon (Rock, Paper, Scissors) game. It includes features such as a timer for move showing, dynamic display of player and computer moves, game status tracking, and a responsive layout. The project utilizes react-icons, react-toastify, and Tailwind for styling.</p>

# 2. Components
<ul href="#2-components">
<li><strong>Home: Displays the name of the game.</strong></li>
<li><strong>Main: Encompasses all application components.</strong></li>
<li><strong>Footer: Show the button for rules. </strong></li>
<li><strong>Modal: Rules of game. </strong></li>
<li><strong>Play: All logic of the game. </strong></li>
</ul>

# 3.Game Logic
<ul href="#3-gameLogic">
<li><strong>
  Move Type:  A standardized type for controlling moves.
</strong></li>
<li><strong>
  Game(playerMove) function: Calculates the game result. 
</strong></li>
<li><strong>
  ComputerMove: Generates a random move for the computer.
 </strong></li>
<li><strong>
  Logic: Implements the game logic using states such as playerWin,     machineWin, playerMove, machineMove, and score.
 </strong></li>
<li><strong>
  useNavigate: Handler click the first button(Go game).
</strong></li>

</ul>
