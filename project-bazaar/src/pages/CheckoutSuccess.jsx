import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import Confetti from 'react-confetti';

export default function CheckoutSuccess() {
  const [windowDimension, setDimension] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const detectSize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', detectSize);
    return () => window.removeEventListener('resize', detectSize);
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '80vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <Confetti 
        width={windowDimension.width} 
        height={windowDimension.height} 
        colors={['#00ff88', '#f0c14b', '#ff4d4d']}
        recycle={false}
        numberOfPieces={500}
      />
      <div style={{
        background: 'var(--bg-panel)',
        padding: '3rem',
        borderRadius: '12px',
        border: '2px solid var(--accent)',
        boxShadow: '0 0 30px rgba(0, 255, 136, 0.2)',
        maxWidth: '500px',
        width: '100%',
        animation: 'pulse 2s infinite'
      }}>
        <CheckCircle size={80} color="var(--accent)" style={{ margin: '0 auto 1.5rem' }} />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>Project Unlocked.</h1>
        <h2 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>God speed. 🙏</h2>
        
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
          Your project files, report, and survival checklist have been added to your dashboard. May the external examiner be kind to you.
        </p>

        <Link to="/" className="btn-add" style={{ display: 'block', width: '100%', textDecoration: 'none', color: '#111' }}>
          <Home style={{ verticalAlign: 'middle', marginRight: '5px' }} /> Back to Safety
        </Link>
      </div>
    </div>
  );
}
