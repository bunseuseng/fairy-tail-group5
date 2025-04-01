import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";

export default function card() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <p>
        Edit <code>src/components/card.jsx</code> and save to test HMR
      </p>
    </div>
  );
}
