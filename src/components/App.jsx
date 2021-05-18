import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import List from './List';
import Detail from './Detail';
import listItemProvider from './utils/listItemProvider';

function App(){
    return(
        <Router className="App">
            <listItemProvider>
                <Route exact path="/" component={List} />
                <Route path="/:id" component={Detail} />
            </listItemProvider>
        </Router>
    )
}
export default App;