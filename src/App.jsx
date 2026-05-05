import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from './components/Quiz/Quiz';
import ShopPage from './pages/ShopPage';
import ProfilePage from "./pages/ProfilePage";
import Header from './components/Header/Header';
import { ThemeContext, UserContext } from "./context";
import { useState } from "react";
import CONSTANTS from './constants';
import RegisterPage from './pages/RegisterPage';
function App() {
  const [theme, setTheme] = useState(CONSTANTS.THEME.LIGHT);
const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <UserContext.Provider value ={{user, setUser}}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          
          <Header />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/shop" element={<ShopPage />} />
            
            <Route path="/profile" element={<ProfilePage />}>
              <Route path="info" element={<ProfilePage />} />
              <Route path="setting" element={<ProfilePage />} />
            </Route>
            <Route path="/register" element={<RegisterPage />} />
          </Routes>

        </ThemeContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
