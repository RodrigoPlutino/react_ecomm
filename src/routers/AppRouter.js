import react from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home';
import Products from '../pages/Products';
import NavBar from '../components/NavBar';
import ItemDetailContainer from '../components/ItemDetailContainer';

function AppRouter() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/products" component={Products}></Route>
                
                <Route path="/products/:id" component={ItemDetailContainer}></Route>
            </Switch>

        </BrowserRouter>
    )
}

export default AppRouter;