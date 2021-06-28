import './App.css';
import  FetchPerson  from './components/FetchPerson';

const divStyle = {
  marginTop:'5rem',
  marginLeft:'15rem',
  width: 1500,
  backgroundColor: "#E7FFD9",
}

function App() {
  return (
    <div className="App" style={divStyle}>
      <FetchPerson/>
    </div>
  );
}



export default App;
