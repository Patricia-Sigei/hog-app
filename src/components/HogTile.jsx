import PropTypes from 'prop-types'; 

const HogTile = ({ hog }) => {
  return (
    <div className="ui eight wide column">
      <div className="ui card">
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <div className="header">{hog.name}</div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
HogTile.propTypes = {
  hog: PropTypes.shape({
    image: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,   
  }).isRequired, 
};

export default HogTile;
