import React from "react";
import Week from "./weekdays";

class Months extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    if (
      nextProps.selectedDay.month !== nextProps.monthIdx ||
      this.props.selectedDay.month !== this.props.monthIdx
    ) {
      return false;
    }
    return true;
  }

  render() {
    const { month } = this.props;
    return (
      <div className="month">
        <h1>
          {month.name} {month.year}
        </h1>
        <h5>
          <span>Sunday Monday Tuesday Wednesday Thursday Friday Saturday</span>
        </h5>
        <div className="week">
          {this.props.month.weeks.map((week, idx) => {
            return (
              <Week
                key={idx}
                selDay={this.props.selDay}
                selectedDay={this.props.selectedDay}
                week={week}
                border={this.props.border}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Months;
