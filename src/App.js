
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Destinations from './components/Home/Destinations/Destinations';
import Footer from './components/Footer/Footer';
import Header from './components/Home/Header/Header';
import LogIn from './components/LogIn/LogIn';
import AuthProvider from './components/context/AuthProvider';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddNewDestination from './components/AddDestination/AddNewDestination';
import PlaceBooking from './components/PlaceBooking/PlaceBooking';
import MyOrder from './components/MyOrder/MyOrder';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Home></Home>

            </Route>
            <Route path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/addnewdestination'>
              <AddNewDestination></AddNewDestination>

            </PrivateRoute>


            <PrivateRoute path='/placebooking/:id'>
              <PlaceBooking></PlaceBooking>
            </PrivateRoute>



            <Route path='/register'>
              <Register></Register>
            </Route>

            <PrivateRoute path='/myorder'>
              <MyOrder></MyOrder>
            </PrivateRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
