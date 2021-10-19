import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "tailwindcss/tailwind.css"
import NavigationBar from './Components/Navber/NavigationBar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Services from './Components/Services/Services';
import About from './Pages/About/About';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Details from './Pages/Details/Details';
import AuthProvider from './Components/context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Gallery from './Pages/Galary/Galary';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App ">
      <AuthProvider>
        <Router>
          <NavigationBar></NavigationBar>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <Route exact path="*">
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
