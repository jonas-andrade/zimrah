import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';          // Axios configurado
import { useAuthStore } from '../stores/authStore';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setToken = useAuthStore(state => state.setToken);
  const setUser = useAuthStore(state => state.setUser);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post('/auth/login', { email, password });
      setToken(response.data.token);
      setUser(response.data.user);
      navigate('/dashboard');
    } catch (error) {
      alert('Falha no login: ' + (error.response?.data?.message || error.message));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-20 p-4 border rounded">
      <h1 className="text-2xl mb-4 text-center font-bold">Entrar no Zimrah</h1>

      <input
        type="email"
        placeholder="Email"
        className="w-full p-2 border mb-4"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Senha"
        className="w-full p-2 border mb-6"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Entrar
      </button>
    </form>
  );
}
