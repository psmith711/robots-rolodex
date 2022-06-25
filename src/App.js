import './App.css';
import { useState, useEffect } from 'react';
import RobotList from './components/card-components/robot-card-list.component';
import SearchBox from './components/search-components/search-box.component';

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

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='app-container'>
      <div>
        <h1 className='title'>Robots Rolodex</h1>
      </div>
      <SearchBox onChangeHandler={onSearchChange} />
      <RobotList robots={filteredRobots} />
    </div>
  );
};
export default App;
