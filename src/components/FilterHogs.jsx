import PropTypes from 'prop-types';
import { useState } from 'react';

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

// PropTypes validation
FilterHogs.propTypes = {
  filterHogs: PropTypes.func.isRequired, 
};

export default FilterHogs;
