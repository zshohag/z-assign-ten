import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Detail from './Pages/Detail/Detail/Detail';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Doctors from './Pages/Doctors/Doctors';
import About from './Pages/About/About';
import Service from './Pages/Home/Service/Service';
import AuthProvider  from './contexts/AuthProvider';
import Department from './Pages/Department/Department';

import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Footer/Footer';




function App() {
  return (
    <div className="App">

     <AuthProvider>
     <Router>
        <Header></Header>
       <Switch>
         <Route exact path='/' >
            <Home></Home>
         </Route>
         <Route exact path='/home' >
            <Home></Home>
         </Route>
         <Route exact path='/services' >
            <Service></Service>
         </Route>
         <Route exact path='/doctors' >
            <Doctors></Doctors>
         </Route>
         <PrivateRoute exact path='/department' >
            <Department></Department>
         </PrivateRoute>
         <Route exact path='/about' >
            <About></About>
         </Route>
         <Route exact path='/login' >
            <Login></Login>
         </Route>
         <PrivateRoute exact path='/detail/:serviceId' >
         <Detail></Detail>
         </PrivateRoute>
         <Route exact path='/detail/:serviceId' >
            <Detail></Detail>
         </Route>
         <Route exact path='*'>
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
