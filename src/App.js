import React from 'react';

import {HashRouter as Router, Route,Link} from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';


const App = ()=>(
    <div>
        <h1>Out of the...</h1>
       <li><Link to="/">Login\Join</Link></li>
       <li><Link to="/chat">Chat</Link></li>
     <Router>
        <Route path="/" exact component={Join}/>
        <Route path="/chat"  component={Chat}/>
    </Router>   
    </div>
    
);

export default App;