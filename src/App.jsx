import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router basename="/zimrah">
      <Routes>
        {/* Ao acessar "/", redireciona direto para "/dashboard" */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
        {/* Rota do dashboard sem proteção */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
