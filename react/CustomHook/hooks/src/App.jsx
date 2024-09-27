import "./App.css";
import Counter1 from "./components/Counter1";
import DisplayData from "./components/DisplayData";
import Dropdown from "./components/Dropdown";
import FormForLocalStorage from "./components/FormForLocalStorage";
import HoverComponent from "./components/HoverComponent";
import MyComponent from "./components/MyComponent";
import useMediaQuery from "./customHooks/useMediaQuery";
import useWindowSize from "./customHooks/useWindowSize";

function App() {
  const { width, height } = useWindowSize();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="container">
      <div className="partition">
        <div className="displayData">
          <DisplayData />
        </div>

        <div className="storeData">
          
          <div>
            {isMobile ? (
              <h1>You are on a mobile device.</h1>
            ) : (
              <h1>You are on a desktop device.</h1>
            )}
          </div>

          <FormForLocalStorage />

          <div>
            <h1>Window Size Tracker</h1>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
          </div>

          <Dropdown />
        </div>

        <div className="searchData">
          <Counter1 />
          <HoverComponent />
          <MyComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
