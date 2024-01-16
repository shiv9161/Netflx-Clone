import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routing from "./Routing"
import Header from './components/Header/Header';
// import Footer from "./components/Footer/Footer"

function App() {
  return (
    <Router>
      <Header />
      <Routing />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
