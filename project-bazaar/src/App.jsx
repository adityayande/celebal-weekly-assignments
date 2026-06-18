import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, MapPin } from 'lucide-react';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import CheckoutSuccess from './pages/CheckoutSuccess';

function Navbar() {
  return (
    <header>
      {/* Top Navbar */}
      <nav className="nav-main">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            Project<span>Bazaar</span>
            <span className="logo-domain">.in</span>
          </Link>
          
          <div className="nav-address hover-border">
            <MapPin size={16} color="#ccc" />
            <div className="nav-address-text">
              <span className="text-muted">Deliver to</span>
              <span className="text-bold">Hostel Room 404</span>
            </div>
          </div>

          <div className="nav-search">
            <select className="search-select">
              <option>All Projects</option>
              <option>IoT</option>
              <option>Web</option>
            </select>
            <input type="text" placeholder="Search for 'ML based Attendance System'" className="search-input" />
            <button className="search-btn">
              <Search size={20} color="#111" />
            </button>
          </div>

          <div className="nav-actions">
            <div className="nav-link hover-border">
              <span className="text-muted">Hello, Student</span>
              <span className="text-bold">Account & Lists</span>
            </div>
            
            <div className="nav-link hover-border">
              <span className="text-muted">Returns</span>
              <span className="text-bold">& Fails</span>
            </div>

            <Link to="/checkout-success" className="nav-cart hover-border">
              <div className="cart-icon-wrapper">
                <span className="cart-count">1</span>
                <ShoppingCart size={32} />
              </div>
              <span className="cart-text">Cart</span>
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Secondary Navbar */}
      <nav className="nav-belt">
        <div className="nav-container">
          <div className="nav-belt-item hover-border" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Menu size={20} /> All
          </div>
          <div className="nav-belt-item hover-border">Guaranteed Pass</div>
          <div className="nav-belt-item hover-border">Cheapest Codes</div>
          <div className="nav-belt-item hover-border">External's Choice</div>
          <div className="nav-belt-item hover-border">Buy Again (Because you failed)</div>
        </div>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
