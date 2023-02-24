


import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import './App.css';
import Header from './componet/Header';
import Home from './componet/Home';
import About from "./componet/About";
import Contact from "./componet/Contact";
import Error from "./componet/Error";
import Insta from "./componet/Insta";
import Mail from "./componet/Mail";
import UserDetails from "./componet/UserDetails";



function App() {
  return (
    <Router>
    <div>
      <Header/>
      
      <Routes>
        <Route path="/">
        <Route index element={<Home />} />
        <Route path="/app" element={<Home />} />
        
        </Route>
          <Route path="/app/:userId" element={<UserDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}>
          <Route index element={<Insta/>}/>
           <Route path='insta' element={<Insta/>}/>
           <Route path='mail' element={<Mail/>}/>
          </Route>
          <Route path="*" element={<Error />} />

            
        </Routes>
    </div>
    </Router>
  );
}

export default App;
