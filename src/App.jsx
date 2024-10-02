import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);

  const generatePassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*[]@#$%&()_{}|<>:?!';
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Senha copiada!');
  };

  return (
    <div className="container">
      <h1 className="title">Gerador de senha</h1>
      <p>Utilize nosso gerador de senhas online para criar senhas fortes e seguras.</p>
      <input 
        type="text" 
        className="password-input" 
        value={password} 
        readOnly 
        placeholder="Sua senha aparecerá aqui" 
      />
      <input 
        type="range" 
        className="range-slider" 
        min="4" 
        max="64" 
        value={length} 
        onChange={(e) => setLength(e.target.value)} 
      />
      <p>Comprimento: {length} caracteres</p>
      <button onClick={generatePassword}>Gerar senha</button>
      <button onClick={copyToClipboard} disabled={!password}>Copiar senha</button>
    </div>
  );
}

export default App;
