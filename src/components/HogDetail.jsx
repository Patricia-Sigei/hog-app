import PropTypes from 'prop-types';

const HogDetail = ({ hog }) => {
  if (!hog) return <div>Select a hog to see details</div>;

  return (
    <div>
      <h2>{hog.name}</h2>
      <img src={hog.image} alt={hog.name} />
      <p>Specialty: {hog.specialty}</p>
      <p>Weight: {hog.weight} lbs</p>
      <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
      <p>Highest Medal: {hog.highestMedal}</p>
    </div>
  );
};

// PropTypes validation
HogDetail.propTypes = {
  hog: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    greased: PropTypes.bool.isRequired,
    highestMedal: PropTypes.string.isRequired,
  }).isRequired, 
};

export default HogDetail;
