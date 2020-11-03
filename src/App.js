// import logo from "./logo.svg";
import "./pages/styles/app.scss";
import { BrowserRouter, Route } from "react-router-dom";
import Work from "./pages/Work";
import Services from "./pages/Services";
import Navigator from "./pages/components/Navigator";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigator />
        <Route exact path="/work" component={Work}></Route>
        <Route exact path="/services" component={Services}></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
