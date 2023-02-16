import "./home.css";
import LeftSideBar from "./homeleftbar";
import Rightsidebar from "./homerightbar";

function App() {
  return (
    <div className="App">
      <div className="container">
        <LeftSideBar />
        <Rightsidebar />
      </div>
    </div>
  );
}

export default App;
