
import './App.css';
import FormComponent from './Components/FormComponent';
import { AuthProvider } from './Context/AuthContext';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route exact path="/" element={<FormComponent/>}></Route>
        <Route exact path="/dashboard" element={<Dashboard/>}></Route>
        <Route exact path="/forgotPassword" element={<ForgotPassword/>}></Route>
      </Routes>
      </AuthProvider>
    </Router>
    
  );
}

export default App;
