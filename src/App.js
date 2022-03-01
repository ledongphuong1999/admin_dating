import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Login from "./pages/login/login";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import PostList from "./pages/postList/PostList";
function App() {
  return (
    < Router >
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route render={() => {
          return localStorage.getItem("accessToken") ?
            <div>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/users">
                    <UserList />
                  </Route>
                  <Route path="/posts">
                    <PostList />
                  </Route>
                  <Route exact path="/user/:userId">
                    <User />
                  </Route>
                  <Route path="/newUser">
                    <NewUser />
                  </Route>
                </Switch>
              </div>
            </div> : <Redirect to="/login" />
        }}>
        </Route>
      </Switch>
    </Router >

  );
}

export default App;
