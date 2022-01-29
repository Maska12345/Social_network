import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Music from "./Components/Music/Music";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Nav/>
                <div className='appContent'>
                    <Routes>
                        <Route path={'/profile'} element={<ProfileContainer />}/>
                        <Route path={'/dialogs/*'} element={<DialogsContainer />}></Route>
                        <Route path={'/users'} element={<UsersContainer />}/>
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
