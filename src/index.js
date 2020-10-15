import React, {useState} from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import Main from './components/Main';
import MainHeader from './components/MainHeader';


const App = () => {

    const [showHeader, setHeader] = useState(1);


    return(
        <BrowserRouter>
        <div>
         
            <MainHeader showHeader={showHeader}/>
            <div className="main">
                <Main />
            </div>
 
        </div>
        </BrowserRouter>
    )
}

ReactDom.render(<App />, document.getElementById('root'));