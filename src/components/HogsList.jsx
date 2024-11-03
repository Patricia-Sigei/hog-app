import hogs from '../porkers_data'; 
import HogTile from './HogTile'; 
import { Grid } from 'semantic-ui-react'; 

const HogsList = () => {
  return (
    <Grid container columns={3} stackable>
      {hogs.map((hog) => (
        <Grid.Column key={hog.name}>
          <HogTile hog={hog} /> 
        </Grid.Column>
      ))}
    </Grid>
  );
};

export default HogsList;
