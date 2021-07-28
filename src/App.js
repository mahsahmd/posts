import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePost from "./components/post/SinglePost";
import "./css/index.css";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/post/:id" component={SinglePost}></Route>
      </Switch>
    </Router>
  );
}

export default App;
