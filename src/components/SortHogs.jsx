// src/components/SortHogs.jsx
import PropTypes from 'prop-types';

const SortHogs = ({ sortHogs }) => {
  return (
    <div>
      <button onClick={() => sortHogs('name')}>Sort by Name</button>
      <button onClick={() => sortHogs('weight')}>Sort by Weight</button>
      <button onClick={() => sortHogs('highestMedal')}>Sort by Highest Medal</button>
    </div>
  );
};

// PropTypes validation
SortHogs.propTypes = {
  sortHogs: PropTypes.func.isRequired, 
};

export default SortHogs;
