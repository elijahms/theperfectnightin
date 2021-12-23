import { Route, Switch } from "react-router-dom";
import ContentContainter from './ContentContainter';
import NavBar from './NavBar';
import HeaderFile from './HeaderFile'
import AboutMePage from "./AboutMePage";
import AddNewPage from "./AddNewPage";

function App() {

  return (
    <div style={{ minHeight: "102vh", background: "linear-gradient(rgba(155,219,193, 1), rgba(155,219,193, 0.7))", fontFamily: "MyThirdFont", fontSize: "20px"}} >
      <HeaderFile />
      <NavBar />
      <Switch>
        <Route path="/addnew">
          <AddNewPage />
        </Route>
        <Route exact path="/about">
          <AboutMePage />
        </Route>
        <Route path="/">
          <ContentContainter />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
