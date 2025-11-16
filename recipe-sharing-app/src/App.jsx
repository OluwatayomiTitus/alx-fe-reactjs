import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const generateRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  // Recompute recommendations whenever homepage renders
  generateRecommendations();

  return (
    <>
    <BrowserRouter>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>My Recipe App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <SearchBar />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
    
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={Number(id)} />;
};

export default App
