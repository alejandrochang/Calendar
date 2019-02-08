import React from "react";
import Day from "./days";

class Weekdays extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="weekdays">
        {this.props.week.days.map((day, idx) => {
          return (
            <Day
              monthIdx={this.props.monthIdx}
              weekIdx={this.props.weekIdx}
              dayIdx={idx}
              selectedDay={this.props.selectedDay}
              day={day}
              select={this.props.select}
              key={idx}
            />
          );
        })}
      </div>
    );
  }
}

export default Weekdays;
