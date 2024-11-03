// src/components/HogDetail.jsx
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

export default HogDetail;
