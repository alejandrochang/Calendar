import React from 'react';

class Days extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.day.highlighted);
  }

  render() {
    if (this.props.day.highlighted) {
      return (
        <div className="days-highligthed" style={{ cursor: "pointer" }}>
          {this.props.day.date}
          <div className="circle"></div>
        </div>
      );
    } else {
      return (
        <div className="days" style={{ cursor: 'pointer' }}>
          {this.props.day.date}
        </div>
      );
    }
  }
}

export default Days;