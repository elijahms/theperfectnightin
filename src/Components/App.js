import { Route, Switch } from "react-router-dom";
import ContentContainter from './ContentContainter';
import NavBar from './NavBar';
import HeaderFile from './HeaderFile'
import AboutUsPage from "./AboutUsPage";
import AddNewPage from "./AddNewPage";

function App() {
  return (
    <div>
      <HeaderFile />
      <NavBar />
      <Switch>
        <Route path="/addnew">
          <AddNewPage />
        </Route>
        <Route exact path="/about">
          <AboutUsPage />
        </Route>
        <Route path="/">
          <ContentContainter />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
