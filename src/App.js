
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import Login from './components/Login'
import Home from './components/Home';
import WarrantyClaims from './components/WarrantyClaims';
import Header from './components/Header'
import NoPage from './components/NoPage';
import PrivateRoute from './PrivateRoute';

import store from './stateManagement/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/claims" element={
              <PrivateRoute>
                <WarrantyClaims />
              </PrivateRoute>
            } />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


export default App;
