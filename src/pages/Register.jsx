import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/register', { email, password });
      alert('Cadastro realizado com sucesso! Faça login.');
      navigate('/login');
    } catch (err) {
      alert('Erro no cadastro');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl mb-6">Cadastrar-se</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="p-2 rounded bg-gray-800"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="p-2 rounded bg-gray-800"
        />
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 py-2 rounded font-semibold">Cadastrar</button>
      </form>
      <p className="mt-4">
        Já tem conta? <Link to="/login" className="underline text-indigo-400">Faça login</Link>
      </p>
    </div>
  );
}
