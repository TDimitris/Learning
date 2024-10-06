
import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';
import Die from './Die';
import Dice from './Dice';
import LuckyN from './LuckyN';
import './App.css';
import {sum} from './utils';
import UsernameForm from './UsernameForm';
import SignupForm from './SignupForm';
import BetterSignupForm from './BetterSignupForm';

function lessThan4(dice) {
  return sum(dice) < 4;
};

function allSameValue(dice) {
  return dice.every(v => v ==dice[0])
}

function App() {

  return (
    <>
      {/* <h1>State Demo!</h1> */}
      {/* <Counter /> */}
      {/* <ScoreKeeper numPlayers={4} target={3}/> */}
      {/* <EmojiClicker /> */}
      {/* <Dice dice={[3,6,1]} color={"red"} />
      <Dice dice={[3,6,1]} color={"red"} />
      <Dice dice={[3,6,1]} color={"red"} /> */}
      
      {/* <LuckyN title="Roll less than 4!" winCheck={lessThan4}/> */}
      {/* <LuckyN title="Roll the same number!" winCheck={allSameValue} numDice={3}/> */}
      {/* <UsernameForm /> */}
      <BetterSignupForm />
    
    </>
  )
}

export default App
