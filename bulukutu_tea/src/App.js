
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';

import Navbar from './components/common/Navbar';
import Layout from './components/common/Layout';
import Homepage from './components/homepage';

function App() {
  return (
    <div className='container-fluid'>
      {/* <Navbar></Navbar> */}
      <Layout>
        
      </Layout>

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
