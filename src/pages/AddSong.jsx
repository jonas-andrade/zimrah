import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function AddSong() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [url, setUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/songs', { title, artist, url });
      alert('Música adicionada com sucesso!');
      navigate('/');
    } catch (err) {
      alert('Erro ao adicionar música');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl mb-6">Adicionar Música</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm gap-4">
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          className="p-2 rounded bg-gray-800"
        />
        <input
          type="text"
          placeholder="Artista"
          value={artist}
          onChange={e => setArtist(e.target.value)}
          required
          className="p-2 rounded bg-gray-800"
        />
        <input
          type="url"
          placeholder="URL da música"
          value={url}
          onChange={e => setUrl(e.target.value)}
          required
          className="p-2 rounded bg-gray-800"
        />
        <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 py-2 rounded font-semibold">Adicionar</button>
      </form>
    </div>
  );
}
