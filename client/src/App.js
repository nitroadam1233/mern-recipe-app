import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";
import { CreateRecipe } from "./pages/Create-recipe";
import { SavedRecipes } from "./pages/Saved-recipes";
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/create-recipe" element={<CreateRecipe />}/>
          <Route path="/saved-recipes" element={<SavedRecipes />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
