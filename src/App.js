import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
    </div>
  );
}
function Person() {
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '20px'
  }
  return (
    // <div className='person'>
    <div style={person}>
      <h1>Name:Sakib Al Hasan</h1>
      <h4>Profession:Cricketer</h4>
    </div>
  )
}

export default App;
