import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="wrapper">

    <header className='header'>
            <img className='logo' src="https://img.pngio.com/atom-icon-png-401284-free-icons-library-atomic-png-256_256.jpg"/>
    </header>
        <nav className='nav'>
                <div>
                    <a href="#">Profile</a>
                </div>
                <div>
                    <a href="#">Messagese</a>
                </div>
                <div>
                    <a href="#">News</a>
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
        </nav>
        <div className='content'>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
        </div>

    </div>
  );
}

export default App;
