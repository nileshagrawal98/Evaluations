import logo from './logo.svg';
import './App.css';
import { CompanyPage } from './Features/CompanySide/CompanyPage';
import { ClientPage } from './Features/ClientSide/ClientPage';
import { Navigation } from './Components/Navigation';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './Components/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/company" element={<PrivateRoute><CompanyPage /></PrivateRoute>}/>
        <Route path="/client" element={<PrivateRoute><ClientPage /></PrivateRoute>}/>
        <Route path="/" element={<div>Home</div>}/>
        <Route path="*" element={<div>404 Page Not found</div>}/>

      </Routes>
    </div>
  );
}

export default App;
