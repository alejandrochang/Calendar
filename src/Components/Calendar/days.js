import React from 'react';

class Days extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.selectedDay);
  }

  render() {
    if (this.props.day.highlighted && this.props.day.date) { // highlighted days
      return (
        <div onClick={this.props.selDay} className="days-highligthed" style={{ cursor: "pointer" }}>
          {this.props.day.date}
          <div className="circle"></div>
        </div>
      );
    } else if (this.props.day.date) { // regular dayss
      return (
        <div className="days" style={{ cursor: 'pointer' }}>
          {this.props.day.date}
        </div>
      );
    } else { // null days
      return (
        <div className="null-days" style={{ cursor: "pointer" }}>
          {this.props.day.date}
        </div>
      );
    }
  }
}

export default Days;