import './App.css'
import Greeter from './Greeter';
import Die from './Die';
import DoubleDice from './DoubleDice';
import Heading from './Heading';
import Slots from './Slots';
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import Counter from './Counter';
import Toggler from './Toggler';
import ColorBox from './Colorbox';
import ColorBoxGrid from './ColorBoxGrid';


const data = [
  {id: 1, item: 'eggs', quantity:12, completed: false},
  {id: 2, item: 'milk', quantity:1, completed: true},
  {id: 3, item: 'chicken breasts', quantity:4, completed: false},
  {id: 4, item: 'carrots', quantity:6, completed: true},
];

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

const colors = [
  "#990000",
  "#886fff",
  "#31d5c8",
  "#1330bf",
  "#133337",
  "#fa1e4e"
]


function App() {
  

  return (
    <div>
    
      {/* <Heading color='blue' text="helloo" />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice /> */}
      {/* <ShoppingList items={data} /> */}
      {/* <Slots value1="d" value2="d" value3="d"/> */}

      {/* <PropertyList properties={properties} /> */}

      {/* <Clicker message="Hi!!!!" buttonText="Please Click Me" />
      <Clicker message="Please Stop Clicking Me!" buttonText="do not click me" /> */}
      {/* <Counter /> */}
      {/* <Toggler /> */}

      <ColorBoxGrid colors={colors}/>
    
    </div>
  )
}

export default App
