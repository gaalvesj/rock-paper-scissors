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
    <a href="#3-game-logic">Game Logic</a>
  </li>
  <li>
    <a href="#4-project-structure">projectStructure</a>
  </li>
  <li>
    <a href="#5-deployment">Deployment</a>
  </li>
  <li>
    <a href="#6-how-to-run">how to run</a>
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
<li><strong>Home:</strong> Displays the name of the game.</li>
<li><strong>Main:</strong> Encompasses all application components.</li>
<li><strong>Footer:</strong> Show the button for rules. </li>
<li><strong>Modal:</strong> Rules of game. </li>
<li><strong>Play:</strong> All logic of the game. </li>
</ul>

# 3. Game Logic
<ul href="#3-game-logic">
<li><strong>
  Move Type:</strong>  A standardized type for controlling moves.
</li>
<li><strong>
  Game(playerMove) function:</strong> Calculates the game result. 
</li>
<li><strong>
  ComputerMove:</strong> Generates a random move for the computer.
 </li>
<li><strong>
  Logic:</strong> Implements the game logic using states such as playerWin,     machineWin, playerMove, machineMove, and score.
 </li>
<li><strong>
  useNavigate: </strong>Handler click the first button(Go game).
</li>
</ul>


# 4. Project Structure
<ul href="#4-project-structure">
<li><strong>Game: </strong>it handles the game layout.</li>
<li><strong>Home: </strong>Includes instructions and a modal for additional information</li>
<li><strong>Rule: </strong>The game runs in matches of three rounds, and the player who wins three rounds first wins the match.</li>
<li><strong>Hooks: </strong>Created hooks for opening/closing the game and showing/hiding the modal.</li>
</ul>

# 5. Deployment
<p href="#5-deployment">The project is deployed on Vercel. During deployment, there were some issues due to a deprecated type of react.</p>

# 6. How to Run Locally
<a href="#6-how-to-run">To run the project locally, follow these steps:</a>
<ol dir="auto">
  <li>Clone the repository: <code>git@github.com:gaalvesj/rock-paper-scissors.git</code></li>
  <li>Install all dependecies: <code>npm install</code></li>
  <li>Start the development server: <code>npm run dev</code></li>
</ol>

# 8. Contact me
<ul>
<li href="#7-contact"><strong>Maintainer: </strong>Gabriel Alves de Jesus</li>
<li><strong>Email: </strong> gabrielalves3654@gmail.com</li>
</ul>
