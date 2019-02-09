import React from 'react';

class Days extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="days" onClick={this.props.select(this.props.dayIdx, this.props.weekIdx, this.props.monthIdx)} style={{cursor: 'pointer'}}>
      {this.props.day.date}
      </div>;
  }
}

export default Days;