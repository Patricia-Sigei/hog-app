// src/components/FilterHogs.jsx
const FilterHogs = ({ filterHogs }) => {
  const [isGreased, setIsGreased] = useState(false);

  const handleFilterChange = (e) => {
    setIsGreased(e.target.checked);
    filterHogs(e.target.checked);
  };

  return (
    <div>
      <label>
        Show Greased Hogs:
        <input type="checkbox" checked={isGreased} onChange={handleFilterChange} />
      </label>
    </div>
  );
};

export default FilterHogs;
