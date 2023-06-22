import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Routes>
         <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
     </Routes>
    </div>
  );
}

export default App;
