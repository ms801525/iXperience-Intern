
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';

import Layout from './components/common/Layout';
import Homepage from './components/homepage';

function App() {
  return (
    <div className='container-fluid'>
      <Layout>
      <div>
        <Homepage></Homepage>
      </div>
      </Layout>
    </div>
  );
}

export default App;
