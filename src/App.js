import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './assets/main.scss';

import Home from './pages/HomePage';
import Sidebar from './containers/Sidebar'

function App() {
    return (
        <div className="App">
            <Router>

                <Sidebar/>

                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>

            </Router>
        </div>
    );
}

export default App;