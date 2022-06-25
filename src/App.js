import './App.css';
import { useState, useEffect } from 'react';
import RobotList from './components/card-components/robot-card-list.component';

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredRobots, setFilteredRobots] = useState(robots);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  useEffect(() => {
    const newfilteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    setFilteredRobots(newfilteredRobots);
  }, [robots, searchField]);

  return (
    <div className='app-container'>
      <div>
        <h1 className='title'>Robots Rolodex</h1>
      </div>
      <input
        className='search-box'
        type='search'
        placeholder='search for robots'
        onChange={(event) => {
          const searchFieldString = event.target.value.toLocaleLowerCase();
          setSearchField(searchFieldString);
        }}
      />
      <RobotList robots={filteredRobots} />
    </div>
  );
};
export default App;
