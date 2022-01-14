import './App.css';
import {Header} from '../Header/header.js'
import {MainContent} from "../MainContent/mainContent";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PresentList from "../../Pages/PresentList/PresentList";

function App() {
  return (
      <div className={"App"}>
            <Router>
                <Header position='relative'/>
                <Routes>
                    <Route exact path="/" element={ <MainContent/> }/>
                    <Route exact path="/actual_block" element={ <PresentList/> } />
                    <Route exact path="/login" element={ <Login/> } />
                    <Route exact path="/register" element={ <Register/> } />
                </Routes>
            </Router>
      </div>
  );
}

export default App;
