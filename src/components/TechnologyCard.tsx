import { Check, Plus, Star } from 'lucide-react';
import type { Technology } from '../types';
interface Props { tech: Technology; added: boolean; onAdd: (tech: Technology) => void; }
export default function TechnologyCard({tech,added,onAdd}:Props){return <article className="tech-card">
  <div className="card-top"><div className="tech-icon"><img src={tech.icon} alt="" onError={(e)=>{e.currentTarget.style.display='none'; e.currentTarget.parentElement!.textContent=tech.name[0]}}/></div><span className="badge">{tech.badge}</span></div>
  <h3>{tech.name}</h3><p>{tech.description}</p>
  <div className="meta"><span className="chip">{tech.category}</span><span className="difficulty">{tech.difficulty}</span></div>
  <div className="card-bottom"><span className="rating"><Star size={16} fill="currentColor"/> {tech.rating}</span><button className={`stack-btn ${added?'added':''}`} disabled={added} onClick={()=>onAdd(tech)}>{added?<><Check size={16}/> Added to Stack</>:<><Plus size={16}/> Add to Stack</>}</button></div>
</article>}
