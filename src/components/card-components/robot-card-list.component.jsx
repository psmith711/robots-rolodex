import { Component } from 'react';
import RobotCard from './robot-card.component';
import './robots.style.css';

const RobotList = ({ robots }) => {
  return (
    <div className='robot-container'>
      {robots.map((robot) => {
        return <RobotCard robot={robot} />;
      })}
    </div>
  );
};

export default RobotList;
