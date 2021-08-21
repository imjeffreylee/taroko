import './App.css';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Contacts />
    </div>
  );
}

export default App;
