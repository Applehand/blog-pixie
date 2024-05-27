import "./styles/App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Pixie } from "./components/Pixie";

function App() {
  return (
    <div className="App">
      <Header />
      <Pixie />
      <Footer />
    </div>
  );
}

export default App;
