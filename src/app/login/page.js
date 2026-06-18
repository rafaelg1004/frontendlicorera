'use client'
import { useState, useContext } from 'react';
import { AuthContext } from '@/context/AuthContext';
import { Wine, Lock, Mail } from 'lucide-react';
import './login.css';

export default function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('admin@licorera.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // MOCK LOGIN para demostración mientras se levanta la BD real
      // Posteriormente se reemplazará por: axios.post('/api/auth/login', ...)
      setTimeout(() => {
        if (email === 'admin@licorera.com' && password === '123456') {
          login({ id: 1, nombre: 'Admin', rol: 'administrador' }, 'fake-jwt-token');
        } else {
          setError('Credenciales inválidas');
        }
        setLoading(false);
      }, 1000);
      
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Error de conexión');
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card glass-panel">
        <div className="login-header">
          <div className="login-logo">
            <Wine size={32} color="#000" />
          </div>
          <h2>Bodega Elite</h2>
          <p className="text-muted">Inicia sesión para continuar</p>
        </div>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <Mail size={18} className="input-icon text-muted" />
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          
          <div className="input-group">
            <Lock size={18} className="input-icon text-muted" />
            <input 
              type="password" 
              placeholder="Contraseña" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Ingresando...' : 'Entrar al Sistema'}
          </button>
        </form>
      </div>
    </div>
  );
}
