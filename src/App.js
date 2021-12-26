import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";


const App = (props) => {
    console.log(props)
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Nav/>
                <div className='appContent'>
                    <Routes>
                        <Route path={'/profile'} element={<Profile state={props.state.ProfilePage} dispatch={props.dispatch}/>}/>
                        <Route path={'/dialogs/*'} element={<Dialogs state={props.state.DialogsPage} />}></Route>
                        <Route path={'/news'} element={<News />}></Route>
                        <Route path={'/music'} element={<Music />}></Route>
                        <Route path={'/settings'} element={<Settings />}></Route>
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
