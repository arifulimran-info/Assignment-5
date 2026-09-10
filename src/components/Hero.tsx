import { ArrowRight, Sparkles } from 'lucide-react';
export default function Hero(){return <section id="home" className="hero"><div className="container hero-inner">
  <div className="hero-copy"><div className="eyebrow"><Sparkles size={15}/> Build smarter. Ship faster.</div><h1>Build Your Ideal<br/><span>Development Stack</span></h1><p>Discover the technologies you need to build modern, scalable products. Explore the stack, compare tools, and create your own developer toolkit.</p><div className="hero-buttons"><a className="primary-btn" href="#technologies">Explore Technologies <ArrowRight size={18}/></a><a className="outline-btn" href="#about">Learn More</a></div></div>
  <div className="hero-art"><div className="art-glow"/><img src="/assets/devstack-hero.png" alt="Futuristic development technology illustration"/></div>
</div></section>}
