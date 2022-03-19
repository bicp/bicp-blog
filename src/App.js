import "./App.css";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <Heading
        spanText=""
        className="h1-class"
        id="h1-title"
        text="Bicp Blog"
      />
      <Heading text="Bicp" />
      <Heading text="Blog" />
    </div>
  );
}

export default App;
