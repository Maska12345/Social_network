import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="wrapper">
        <Header />
        <Nav />
        <div className='appContent'>
            <Profile />
        </div>
        <Dialogs />

    </div>
  );
}

export default App;
