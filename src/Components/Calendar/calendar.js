import React from "react";
import Month from "./months";
import './calendar.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    const d = new Date();
    this.state = {
      selectedDay: { day: d.getDate(), week: d.getDay(), month: d.getMonth() },
      monthLabel: ['Sun ','Mon ', 'Tue ', 'Wed ', 'Thu ', 'Fri ', 'Sat '],
      months: [
        {
          name: "January",
          weeks: [
            { days: [{ date: null }, { date: null }, { date: null }, { date: null }, { date: null }, { date: 1 }, { date: 2 }] },
            { days: [{ date: 3 }, { date: 4 }, { date: 5 }, { date: 6 }, { date: 7 }, { date: 8 }, { date: 9 }] },
            { days: [{ date: 10 }, { date: 11 }, { date: 12 }, { date: 13 }, { date: 13 }, { date: 15 }, { date: 16}] },
            { days: [{ date: 17 }, { date: 18 }, { date: 19 }, { date: 20 }, { date: 21 }, { date: 22 }, { date: 23}] },
            { days: [{ date: 24 }, { date: 25 }, { date: 26 }, { date: 27 }, { date: 28 }] },
          ],
          year: 2019
        },
        {
          name: "February",
          weeks: [
            { days: [{ date: null }, { date: null }, { date: null }, { date: null }, { date: null }, { date: 1 }, { date: 2 }] },
            { days: [{ date: 3 }, { date: 4 }, { date: 5 }, { date: 6 }, { date: 7 }, { date: 8 }, { date: 9 }] },
            { days: [{ date: 10 }, { date: 11 }, { date: 12 }, { date: 13 }, { date: 13 }, { date: 15 }, { date: 16}] },
            { days: [{ date: 17 }, { date: 18 }, { date: 19 }, { date: 20 }, { date: 21 }, { date: 22 }, { date: 23}] },
            { days: [{ date: 24 }, { date: 25 }, { date: 26 }, { date: 27 }, { date: 28 }, { date: 29 }, { date: 30 }] },
            { days: [{ date: 31 }] },
          ],
          year: 2019
        },
        {
          name: "March",
          weeks: [
            { days: [{ date: null }, { date: null }, { date: null }, { date: null }, { date: null }, { date: 1 }, { date: 2 }] },
            { days: [{ date: 3 }, { date: 4 }, { date: 5 }, { date: 6 }, { date: 7 }, { date: 8 }, { date: 9 }] },
            { days: [{ date: 10 }, { date: 11 }, { date: 12 }, { date: 13 }, { date: 13 }, { date: 15 }, { date: 16}] },
            { days: [{ date: 17 }, { date: 18 }, { date: 19 }, { date: 20 }, { date: 21 }, { date: 22 }, { date: 23}] },
            { days: [{ date: 24 }, { date: 25 }, { date: 26 }, { date: 27 }, { date: 28 }] },
          ],
          year: 2019
        },
        {
          name: "April",
          weeks: [
            { days: [{ date: null }, { date: null }, { date: null }, { date: null }, { date: null }, { date: 1 }, { date: 2 }] },
            { days: [{ date: 3 }, { date: 4 }, { date: 5 }, { date: 6 }, { date: 7 }, { date: 8 }, { date: 9 }] },
            { days: [{ date: 10 }, { date: 11 }, { date: 12 }, { date: 13 }, { date: 13 }, { date: 15 }, { date: 16}] },
            { days: [{ date: 17 }, { date: 18 }, { date: 19 }, { date: 20 }, { date: 21 }, { date: 22 }, { date: 23}] },
            { days: [{ date: 24 }, { date: 25 }, { date: 26 }, { date: 27 }, { date: 28 }] },
          ],
          year: 2019
        }
      ]
    };
  }

  selectDay = (day, week, month) => {
    this.setState({ 
      selectedDay: { day: day, week: week, month: month }
    });
    // console.log(this.state.selectedDay)
  } 

  render() {
    return (
      <div className="all-months">
        {this.state.months.map((month, idx) => {
          return (
            <Month
              monthIdx={idx}
              weeklabel={this.state.monthLabel}
              selectedDay={this.state.selectedDay}
              month={month}
              select={this.selectDay}
              key={idx}
            />
          );
        })}
      </div>
    );
  }
}

export default Calendar;
