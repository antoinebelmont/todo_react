import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import List from './List';
import Detail from './Detail';
import TaskProvider from '../provider/TaskProvider';

function App(){
    return(
        <Router className="App">
            <TaskProvider>
                <Route exact path="/" component={List} />
                <Route path="/:id" component={Detail} />
            </TaskProvider>
        </Router>
    )
}
export default App;