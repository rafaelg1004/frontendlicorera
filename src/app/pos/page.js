'use client'
import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';
import axios from 'axios';
import './pos.css';

export default function POS() {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);
  const [search, setSearch] = useState('');

  // Simulamos carga de productos o conectamos real
  useEffect(() => {
    // Ejemplo mock mientras levantas tu backend local
    setProductos([
      { id: 1, nombre: 'Whisky Blue Label 750ml', precio: 250.00, img: '🥃' },
      { id: 2, nombre: 'Cerveza Artesanal IPA', precio: 5.50, img: '🍺' },
      { id: 3, nombre: 'Vino Tinto Reserva', precio: 45.00, img: '🍷' },
      { id: 4, nombre: 'Tequila Reposado', precio: 60.00, img: '🍋' },
      { id: 5, nombre: 'Ron Añejo Especial', precio: 35.00, img: '🍹' },
      { id: 6, nombre: 'Vodka Premium 1L', precio: 42.00, img: '🍸' },
    ]);
    
    // axios.get('http://localhost:3000/api/productos')
    //   .then(res => setProductos(res.data.data))
    //   .catch(err => console.error(err));
  }, []);

  const addToCart = (prod) => {
    const exist = cart.find(item => item.id === prod.id);
    if (exist) {
      setCart(cart.map(item => item.id === prod.id ? { ...item, cantidad: item.cantidad + 1 } : item));
    } else {
      setCart([...cart, { ...prod, cantidad: 1 }]);
    }
  };

  const updateQuantity = (id, delta) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = item.cantidad + delta;
        return newQty > 0 ? { ...item, cantidad: newQty } : item;
      }
      return item;
    }));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  
  const filteredProducts = productos.filter(p => p.nombre.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="pos-container">
      {/* Lado Izquierdo: Buscador y Productos */}
      <div className="pos-products">
        <header>
          <h1>Punto de Venta</h1>
          <p className="text-muted">Busca productos y agrégalos al ticket</p>
        </header>

        <div className="search-bar">
          <Search size={20} className="text-muted" />
          <input 
            type="text" 
            placeholder="Código de barras o nombre del producto..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="products-grid">
          {filteredProducts.map(prod => (
            <div key={prod.id} className="product-card glass-panel" onClick={() => addToCart(prod)}>
              <div className="product-img">{prod.img}</div>
              <h3>{prod.nombre}</h3>
              <p className="price">${prod.precio.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lado Derecho: Ticket / Carrito */}
      <div className="pos-ticket glass-panel">
        <div className="ticket-header">
          <h2>Ticket Actual</h2>
          <ShoppingBag size={20} className="text-muted" />
        </div>

        <div className="ticket-items">
          {cart.length === 0 && <p className="text-muted" style={{textAlign: 'center', marginTop: '2rem'}}>El carrito está vacío</p>}
          {cart.map(item => (
            <div key={item.id} className="ticket-item">
              <div className="item-info">
                <h4>{item.nombre}</h4>
                <p className="text-muted">${item.precio.toFixed(2)}</p>
              </div>
              <div className="item-controls">
                <button className="ctrl-btn" onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                <span>{item.cantidad}</span>
                <button className="ctrl-btn" onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
              </div>
              <p className="item-total">${(item.precio * item.cantidad).toFixed(2)}</p>
              <button className="delete-btn" onClick={() => removeFromCart(item.id)}><Trash2 size={16} /></button>
            </div>
          ))}
        </div>

        <div className="ticket-summary">
          <div className="summary-row">
            <span className="text-muted">Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span className="text-muted">Impuestos (19%)</span>
            <span>${(total * 0.19).toFixed(2)}</span>
          </div>
          <div className="summary-total">
            <span>Total a Cobrar</span>
            <h2>${(total * 1.19).toFixed(2)}</h2>
          </div>
          <button className="btn-primary" disabled={cart.length === 0} style={{ width: '100%', marginTop: '1.5rem', padding: '1rem', fontSize: '1.1rem', opacity: cart.length === 0 ? 0.5 : 1 }}>
            Procesar Pago
          </button>
        </div>
      </div>
    </div>
  );
}
