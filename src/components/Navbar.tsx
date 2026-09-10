import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Home','Technologies','Projects','About','Contact'];
  return <header className="navbar-wrap"><nav className="navbar container">
    <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    <a className="brand" href="#home"><span className="brand-mark">✦</span><span>Dev Stack</span></a>
    <div className={`nav-links ${open ? 'open' : ''}`}>{links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}</div>
    <div className="nav-actions"><button className="signin">Sign In</button><button className="signup">Sign Up</button></div>
  </nav></header>
}
