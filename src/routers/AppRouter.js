import react from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home';
import Products from '../pages/Products';
import NavBar from '../components/NavBar';

function AppRouter() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/Products" component={Products}></Route>
                <Route path="*">Not Found</Route>
            </Switch>
        </BrowserRouter>
    )
}

export default AppRouter;