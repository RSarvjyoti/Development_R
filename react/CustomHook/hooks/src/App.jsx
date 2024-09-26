import "./App.css";
import DisplayData from "./components/DisplayData";
import FormForLocalStorage from "./components/FormForLocalStorage";

function App() {
  return (
    <div className="container">
      <div className="partition">

        <div className="displayData">
          <DisplayData />
        </div>

        <div className="storeData">
          <FormForLocalStorage />
        </div>

        <div className="searchData">

        </div>

      </div>
    </div>
  );
}

export default App;
