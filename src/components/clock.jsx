import React, { Component } from 'react';

class Clock extends Component {

  setDate = () => {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  render() {
    setInterval(this.setDate, 1000);
    return (
     <div className="clock">
      <div className="clock-face">
        <div className="hand hour-hand"></div>
        <div className="hand min-hand"></div>
        <div className="hand second-hand"></div>
      </div>
    </div>
    );
  }
}

export default Clock;
