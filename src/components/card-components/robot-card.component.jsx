const RobotCard = ({ robot }) => {
  return (
    <div className='robot-card' key={robot.id}>
      <img src={`https://robohash.org/${robot.name}.jpg`}></img>
      <h2 className='robot-name'>{robot.name}</h2>
      <p className='robot-email'>{robot.email}</p>
    </div>
  );
};

export default RobotCard;
