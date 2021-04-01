import { React,useState } from "react";
import './App.css';
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

// import Spinner from "./components/Spinner"
import Header from "./Screens/components/header/Header"
import Navbar from "./Screens/components/navbar/Navbar"
import Home from "./Screens/Home/Home"
import CustomerSupport from "./Screens/CustomerSupport/CustomerSupport"
import DhlNotification from "./Screens/DhlNotification/DhlNotification"
import CustomerPayments from "./Screens/CustomePayments/CustomerPayments"
function App() {
  // const [loading, setLoading] = useState(true);
  return (
   <div>
     <div>
       <BrowserRouter>
       <Header/>
       <Navbar/>
       <Switch>
         <Route exact path="/">
         <Home/>
         </Route>
         <Route path="/customer_support">
         <CustomerSupport/>
         </Route>
         <Route path="/dhl_notification_email">
         <DhlNotification/>
         </Route>
         <Route path="/customer_payments">
         <CustomerPayments/>
         </Route>
       </Switch>
       </BrowserRouter>
     </div>

   </div>
  );
}

export default App;
