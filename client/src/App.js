import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContexts"
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import Main from "./pages/Main";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute"
import Home from './components/Main'
import Poll from './components/Poll'
import Feed from './components/Feed'
// library.add(fab)
import './index.css'

function App() {
    return (<>


        <Home />
        {/* <Router>
            <div>
                <Navbar /> 
               <AuthProvider>
                    <div className="w-100" style={{ maxWidth: "400px" }}>
                        <PrivateRoute exact path="/" component={Main} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/login" component={Login} />
                    </div>
            </AuthProvider>
        </div>
        </Router> */}

    </>
    )
}

export default App;