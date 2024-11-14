import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1';
import Component001 from './components/Component001';
import Component2 from './components/Component2';
import Hello from './components/Hello';
import Hello2 from './components/Hello2';
import C20241111 from './components/C20241111';
import C20241114 from './components/C20241114';
import C20241114a from './components/C20241114a';
import Router from './components/Router';
function App() {

  const tempName = "test1";
  const tempObj = {
    name : "name1",
    number : 101

  }

  return (
    <>
      <Router/>
        {/* <p>
        20241028 react oss class published!
        </p> */}
        {/* <Hello name="Sun" /> */}
        {/* <C20241111 name={tempName} obj={tempObj}/> */}
        {/* <C20241114a name="parameter!"/> */}
        {/* */}
        
        </> 
  );
}

export default App;
