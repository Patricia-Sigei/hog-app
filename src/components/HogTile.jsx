import PropTypes from 'prop-types'; 
import { Card, Image, Button } from 'semantic-ui-react';

const HogTile = ({ hog }) => {
  return (
    <Card className="ui eight wide column">
      <Image src={hog.image} alt={hog.name} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{hog.name}</Card.Header>
        <Card.Description>
          Specialty: {hog.specialty} <br />
          Weight: {hog.weight} lbs <br />
          Highest Medal: {hog.highestMedal}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button basic color="blue">View Details</Button>
      </Card.Content>
    </Card>
  );
};

// PropTypes validation
HogTile.propTypes = {
  hog: PropTypes.shape({
    image: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    specialty: PropTypes.string.isRequired, 
    weight: PropTypes.number.isRequired, 
    highestMedal: PropTypes.string.isRequired, 
  }).isRequired, 
};

export default HogTile;
