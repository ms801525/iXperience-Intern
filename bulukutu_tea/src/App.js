
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.json'
import './App.css';

import Navbar from './components/common/Navbar';
import Homepage from './components/homepage';

function App() {
  return (
    <div className='container-fluid'>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Homepage></Homepage>
      </div>
    </div>
  );
}

export default App;
