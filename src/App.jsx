import { useState } from 'react';
import FilterHogs from './components/FilterHogs';
import AddHogForm from './components/AddHogForm';
import HogsList from './components/HogsList';
import hogs from './porkers_data'; 

function App() {
  const [filteredHogs, setFilteredHogs] = useState(hogs);

  const filterHogs = (isGreased) => {
    const updatedHogs = isGreased ? hogs.filter(hog => hog.greased) : hogs;
    setFilteredHogs(updatedHogs);
  };

  const addHog = (newHog) => {
    setFilteredHogs([...filteredHogs, newHog]);
  };

  return (
    <>
      <h1>Hogs</h1>
      <FilterHogs filterHogs={filterHogs} />
      <AddHogForm addHog={addHog} />
      <HogsList hogs={filteredHogs} />
    </>
  );
}

export default App;
