
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import Login from './components/Login'
import Home from './components/Home';
import NoPage from './components/NoPage';
import PrivateRoute from './PrivateRoute';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


export default App;
