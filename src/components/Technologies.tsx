import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../types";
import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";
import technologyData from "../data/technologies.json";

export default function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    const timer = setTimeout(() => {
      setTechnologies(technologyData as Technology[]);
      setLoading(false);
    }, 350);
    return () => clearTimeout(timer);
  }, []);
  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Language",
    "Styling",
    "DevOps",
    "Tools",
  ];
  const visible =
    filter === "All"
      ? technologies
      : technologies.filter((t) => t.category === filter);
  const add = (tech: Technology) => {
    if (stack.some((t) => t.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((s) => [...s, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };
  const remove = (id: string) => setStack((s) => s.filter((t) => t.id !== id));
  const clear = () => {
    setStack([]);
    toast.info("Your stack has been cleared.");
  };
  return (
    <section id="technologies" className="tech-section">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>
              Explore the <span>Technologies</span>
            </h2>
            <p>Pick one technology per category to build your ideal stack.</p>
          </div>
        </div>
        <div className="tech-layout">
          <div className="tech-grid">
            {loading ? (
              <div className="loading">
                <div className="spinner" />
                <span>Loading technologies...</span>
              </div>
            ) : (
              visible.map((t) => (
                <TechnologyCard
                  key={t.id}
                  tech={t}
                  added={stack.some((s) => s.id === t.id)}
                  onAdd={add}
                />
              ))
            )}
          </div>
          <StackSidebar stack={stack} onRemove={remove} onClear={clear} />
        </div>
      </div>
    </section>
  );
}
