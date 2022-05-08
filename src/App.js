import { Router, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import { createBrowserHistory } from 'history';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import MainUser from './pages/User/MainUser';

function App() {
    const history = createBrowserHistory();
    const token = localStorage.getItem('substkn');

    useEffect(() => {
        if (!!token) {
            history.push('/MainUser');
        }
    }, [token, history]);

    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/MainUser" component={MainUser} />
                <Route exact path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
