import { Trash2, X } from "lucide-react";
import type { Technology } from "../types";
interface Props {
  stack: Technology[];
  onRemove: (id: string) => void;
  onClear: () => void;
}
export default function StackSidebar({ stack, onRemove, onClear }: Props) {
  return (
    <aside className="stack-panel">
      <div className="stack-heading">
        <div>
          <p className="section-kicker">YOUR COLLECTION</p>
          <h2>Your Stack</h2>
        </div>
        <span className="count">{stack.length}</span>
      </div>
      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">+</div>
        </div>
      ) : (
        <div className="stack-list">
          {stack.map((t) => (
            <div className="stack-item" key={t.id}>
              <img src={t.icon} alt="" />
              <div>
                <strong>{t.name}</strong>
                <span>{t.category}</span>
              </div>
              <button
                onClick={() => onRemove(t.id)}
                aria-label={`Remove ${t.name}`}>
                <X size={17} />
              </button>
            </div>
          ))}
        </div>
      )}
      {stack.length > 0 && (
        <button className="remove-all" onClick={onClear}>
          <Trash2 size={15} /> Remove All
        </button>
      )}
    </aside>
  );
}
