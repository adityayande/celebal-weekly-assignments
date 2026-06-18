import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { projects } from '../data';

function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/checkout-success');
  };

  return (
    <Link to={`/project/${project.id}`} className="card">
      <img src={project.image} alt={project.title} className="card-img" />
      
      <h2 className="card-title">{project.title}</h2>
      
      <div className="reviews-row">
        <span className="stars">★★★★☆</span>
        <span className="review-count">{(Math.random() * 500 + 100).toFixed(0)}</span>
      </div>

      <div className="price-row">
        <span className="currency-symbol">🪙</span>
        <span className="price-whole">{project.price}</span>
        <span className="price-fraction">00</span>
      </div>

      <div className="prime-logo">
        <Check size={16} /> Pass<span>™</span>
      </div>

      <div className="delivery-text">
        Get it by <strong>Viva Day</strong><br/>
        FREE Delivery by Seniors
      </div>

      <div className="stock-text">
        Only 1 left in stock - order soon.
      </div>
      
      <div style={{ marginTop: 'auto' }}>
        <button className="btn-add" style={{ width: '100%' }} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      <div className="home-banner">
        {/* Amazon banner background styling */}
      </div>
      
      <div className="container">
        <div style={{ display: 'flex', gap: '1rem' }}>
          
          <aside style={{ width: '250px', flexShrink: 0, marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Department</h3>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', lineHeight: '1.6' }}>
              <li><a href="#" style={{ color: 'var(--text-main)' }}>IoT Projects</a></li>
              <li><a href="#" style={{ color: 'var(--text-main)' }}>Machine Learning</a></li>
              <li><a href="#" style={{ color: 'var(--text-main)' }}>Web Development</a></li>
              <li><a href="#" style={{ color: 'var(--text-main)' }}>Embedded Systems</a></li>
            </ul>

            <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Customer Review</h3>
            <div style={{ color: '#ffa41c', fontSize: '1.1rem' }}>★★★★☆ & Up</div>

            <h3 style={{ fontSize: '1rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Price</h3>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-main)' }}>
              <li>Under 🪙500</li>
              <li>🪙500 to 🪙1000</li>
              <li>🪙1000 to 🪙2000</li>
              <li>Over 🪙2000</li>
            </ul>
          </aside>
          
          <main style={{ flexGrow: 1 }}>
            <div style={{ background: 'var(--bg-panel)', padding: '1rem', marginBottom: '1rem', border: '1px solid var(--border)' }}>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'normal' }}>Results</h1>
              <span className="text-muted">Check each product page for other buying options.</span>
            </div>
            
            <div className="products-grid">
              {projects.map(p => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </main>
          
        </div>
      </div>
    </div>
  );
}
