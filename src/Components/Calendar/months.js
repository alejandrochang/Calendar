import React from 'react';
import Week from './weekdays';

class Months extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.selectedDay.month !== nextProps.monthIdx || 
      this.props.selectedDay.month !== this.props.monthIdx) {
        return false;
    }
    return true;
  }

  render() {
    const { month } = this.props;
    return (<div className="month">
        <h1>
          {month.name} {month.year}
        </h1>
        <h5>
          {this.props.weeklabel.map(label => {
            return label;
          })}
        </h5>
        <div className="week">
          {this.props.month.weeks.map((week, idx) => {
            return <Week key={idx} monthIdx={this.props.monthIdx} weekIdx={idx} selectedDay={this.props.selectedDay} week={week} select={this.props.select}/>;
          })}
        </div>
      </div>
    );
  }
}

export default Months;