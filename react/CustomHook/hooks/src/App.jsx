import "./App.css";
import DisplayData from "./components/DisplayData";

function App() {
  return (
    <div className="container">
      <div className="partition">

        <div className="displayData">
          <DisplayData />
        </div>

        <div className="storeData">

        </div>

        <div className="searchData">

        </div>

      </div>
    </div>
  );
}

export default App;
