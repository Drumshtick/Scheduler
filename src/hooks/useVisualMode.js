import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  
  function transition(value, replace = false) {
    if (replace === true) {
      setHistory((prev) => {
        const currentNew = [...prev];
        currentNew[1] = value;
        setMode(value);
        return currentNew;
      });
      return;
    }
    setHistory((prev) => {
      const currentNew = [...prev];
      currentNew.push(value);
      return currentNew;
    });
    setMode(value);
  }
  
  function back() {
    if (history.length === 1) {
      return;
    }
    setHistory((current) => {
      const currentNew = [...current];
      currentNew.pop();
      setMode(currentNew[currentNew.length - 1]);
      return currentNew;
    })
  }

  return { 
    mode,
    transition,
    back
  };
}