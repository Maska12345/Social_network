import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
    <header className='header'>
        <div className='logo'>
            <img src="https://img.pngio.com/atom-icon-png-401284-free-icons-library-atomic-png-256_256.jpg"/>
        </div>
    </header>
        <nav className='nav'>
            <div>
                <div>
                    Profile
                </div>
                <div>
                    Messages
                </div>
                <div>
                    Settings
                </div>
            </div>
        </nav>
    </div>
  );
}

export default App;
