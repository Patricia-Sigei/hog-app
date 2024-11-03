// src/components/HogsList.jsx
import hogs from '../porkers_data'; 
import HogTile from './HogTile'; 


const HogsList = () => {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => (
        <HogTile key={hog.name} hog={hog} /> 
      ))}
    </div>
  );
};

export default HogsList;
