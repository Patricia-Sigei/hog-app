// src/components/SortHogs.jsx
const SortHogs = ({ sortHogs }) => {
  return (
    <div>
      <button onClick={() => sortHogs('name')}>Sort by Name</button>
      <button onClick={() => sortHogs('weight')}>Sort by Weight</button>
      <button onClick={() => sortHogs('highestMedal')}>Sort by Highest Medal</button>
    </div>
  );
};

export default SortHogs;
