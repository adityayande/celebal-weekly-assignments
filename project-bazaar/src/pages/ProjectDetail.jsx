import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShieldCheck, CheckCircle, AlertTriangle, MessageCircle, MapPin } from 'lucide-react';
import { projects } from '../data';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);
  const [isAdding, setIsAdding] = useState(false);

  if (!project) {
    return <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>Project not found.</div>;
  }

  const handleUnlock = () => {
    setIsAdding(true);
    setTimeout(() => {
      navigate('/checkout-success');
    }, 1000);
  };

  return (
    <div className="container" style={{ paddingBottom: '4rem', paddingTop: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr 300px', gap: '2rem' }}>
        
        {/* Left: Image */}
        <div>
          <img src={project.image} alt={project.title} style={{ width: '100%', border: '1px solid var(--border)', background: '#fff' }} />
        </div>

        {/* Center: Details */}
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 'normal', lineHeight: '1.3', marginBottom: '0.5rem' }}>{project.title}</h1>
          <div style={{ color: 'var(--link-color)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Visit the {project.domain} Store</div>
          <div className="reviews-row" style={{ fontSize: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '1rem' }}>
            <span className="stars" style={{ fontSize: '1.2rem' }}>★★★★☆</span>
            <span className="review-count">1,248 ratings</span>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Price:</div>
            <div className="price-row" style={{ color: '#b12704' }}>
              <span className="currency-symbol" style={{ fontSize: '1rem' }}>🪙</span>
              <span className="price-whole" style={{ fontSize: '2rem' }}>{project.price}</span>
              <span className="price-fraction" style={{ fontSize: '1rem' }}>00</span>
            </div>
            <div style={{ fontSize: '0.9rem' }}>Includes all taxes and failing fears.</div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>About this item</h3>
            <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem', lineHeight: '1.5', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>Tech Stack:</strong> {project.techStack.join(', ')}</li>
              <li><strong>Viva Survival Prob:</strong> {project.vivaSurvival}% guaranteed survival.</li>
              <li><strong>Explainability Score:</strong> {project.explainability}/10 (Easier to BS than writing actual code).</li>
              {project.whatYouGet.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#e47911', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertTriangle size={20} /> Viva Q&A Cheat Sheet
            </h3>
            {project.qna.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '1rem' }}>
                <div style={{ fontWeight: 'bold' }}>Q: {item.q}</div>
                <div style={{ color: 'var(--text-muted)' }}>A: {item.a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Buy Box */}
        <div>
          <div style={{ border: '1px solid var(--border)', borderRadius: '8px', padding: '1rem', background: 'var(--bg-panel)' }}>
            <div className="price-row" style={{ color: '#b12704', marginBottom: '1rem' }}>
              <span className="currency-symbol" style={{ fontSize: '0.9rem' }}>🪙</span>
              <span className="price-whole" style={{ fontSize: '1.5rem' }}>{project.price}</span>
              <span className="price-fraction" style={{ fontSize: '0.9rem' }}>00</span>
            </div>
            
            <div style={{ fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.4' }}>
              FREE delivery <strong>Today</strong> by Seniors.<br/>
              Or fastest delivery <strong>Tomorrow</strong>. Order within <span style={{ color: '#00ff88' }}>2 hrs 30 mins</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--link-color)', marginBottom: '1rem' }}>
              <MapPin size={16} /> Deliver to Hostel Room 404
            </div>

            <div style={{ color: '#00ff88', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              In Stock.
            </div>

            <button 
              className="btn-add" 
              style={{ width: '100%', marginBottom: '0.5rem', background: '#ffd814', border: '1px solid #fcd200', padding: '0.6rem', borderRadius: '100px', cursor: 'pointer' }}
              onClick={handleUnlock}
              disabled={isAdding}
            >
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </button>
            <button 
              className="btn-add" 
              style={{ width: '100%', background: '#ffa41c', border: '1px solid #ff8f00', padding: '0.6rem', borderRadius: '100px', cursor: 'pointer' }}
              onClick={handleUnlock}
              disabled={isAdding}
            >
              Buy Now
            </button>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1rem', justifyContent: 'center' }}>
              <ShieldCheck size={14} /> Secure transaction
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
