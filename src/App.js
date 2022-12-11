import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Track from"./components/track";
import Home from"./components/home";
import Header from"./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="track/:id" element={<Track />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
