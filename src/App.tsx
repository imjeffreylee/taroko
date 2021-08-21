import './App.css';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import SortImage from './assets/sort-button.png';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="header-container">
        <h1>Contacts</h1>
        <img src={SortImage} alt="sort" />
      </div>
      <Contacts />
    </div>
  );
}

export default App;
