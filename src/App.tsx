import { useEffect, useState } from 'react';
import './App.css';
import people from './people.json';

function App() {
  const [inDisplay, setInDisplay] = useState<number>();
  const sorted = people.sort((a, b) => (a.last_name > b.last_name ? -1 : 1));
  const filtered = sorted.filter((_, index) => !((index + 1) % 3));

  useEffect(() => {
    if (!filtered.length) return;
    const selected = inDisplay ?? 0;
    if (selected > filtered.length) return;
    setInDisplay(selected);
    setTimeout(() => {
      setInDisplay(selected + 1);
    }, filtered[selected]?.timeout * 1000);
  }, [inDisplay, filtered]);

  const name =
    inDisplay !== undefined && filtered[inDisplay]
      ? `${filtered[inDisplay].name} ${filtered[inDisplay].last_name}`
      : '';

  return (
    <div className="App">
      <header className="App-header">
        <p>{name}</p>
      </header>
    </div>
  );
}

export default App;
