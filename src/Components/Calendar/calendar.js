import React from "react";
import Month from "./months";
import './calendar.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    const stringDay = new Date().toLocaleString().slice(0, 8)

    this.state = {
      selectedDay: stringDay,
      monthLabel: ["Sun ", "Mon ", "Tue ", "Wed ", "Thu ", "Fri ", "Sat "],
      months: [
        {
          name: "January",
          weeks: [
            {
              days: [
                { date: null, highlighted: false },
                { date: null, highlighted: false },
                { date: null, highlighted: false },
                { date: null, highlighted: false },
                { date: null, highlighted: false },
                { date: 1, highlighted: false },
                { date: 2, highlighted: false }
              ]
            },
            {
              days: [
                { date: 3, highlighted: false },
                { date: 4, highlighted: false },
                { date: 5, highlighted: false },
                { date: 6, highlighted: false },
                { date: 7, highlighted: false },
                { date: 8, highlighted: true },
                { date: 9, highlighted: false }
              ]
            },
            {
              days: [
                { date: 10, highlighted: false },
                { date: 11, highlighted: false },
                { date: 12, highlighted: false },
                { date: 13, highlighted: false },
                { date: 13, highlighted: false },
                { date: 15, highlighted: false },
                { date: 16, highlighted: false }
              ]
            },
            {
              days: [
                { date: 17, highlighted: false },
                { date: 18, highlighted: false },
                { date: 19, highlighted: false },
                { date: 20, highlighted: false },
                { date: 21, highlighted: false },
                { date: 22, highlighted: false },
                { date: 23, highlighted: false }
              ]
            },
            {
              days: [
                { date: 24, highlighted: false },
                { date: 25, highlighted: false },
                { date: 26, highlighted: false },
                { date: 27, highlighted: false },
                { date: 28, highlighted: false }
              ]
            }
          ],
          year: 2019
        },
        {
          name: "February",
          weeks: [
            {
              days: [
                { date: null },
                { date: null },
                { date: null },
                { date: null },
                { date: null },
                { date: 1 },
                { date: 2 }
              ]
            },
            {
              days: [
                { date: 3 },
                { date: 4 },
                { date: 5 },
                { date: 6 },
                { date: 7 },
                { date: 8 },
                { date: 9 }
              ]
            },
            {
              days: [
                { date: 10 },
                { date: 11 },
                { date: 12 },
                { date: 13 },
                { date: 13 },
                { date: 15 },
                { date: 16 }
              ]
            },
            {
              days: [
                { date: 17 },
                { date: 18 },
                { date: 19 },
                { date: 20 },
                { date: 21 },
                { date: 22 },
                { date: 23 }
              ]
            },
            {
              days: [
                { date: 24 },
                { date: 25 },
                { date: 26 },
                { date: 27 },
                { date: 28 },
                { date: 29 },
                { date: 30 }
              ]
            },
            { days: [{ date: 31 }] }
          ],
          year: 2019
        },
        {
          name: "March",
          weeks: [
            {
              days: [
                { date: null },
                { date: null },
                { date: null },
                { date: null },
                { date: null },
                { date: 1 },
                { date: 2 }
              ]
            },
            {
              days: [
                { date: 3 },
                { date: 4 },
                { date: 5 },
                { date: 6 },
                { date: 7 },
                { date: 8 },
                { date: 9 }
              ]
            },
            {
              days: [
                { date: 10 },
                { date: 11 },
                { date: 12 },
                { date: 13 },
                { date: 13 },
                { date: 15 },
                { date: 16 }
              ]
            },
            {
              days: [
                { date: 17 },
                { date: 18 },
                { date: 19 },
                { date: 20 },
                { date: 21 },
                { date: 22 },
                { date: 23 }
              ]
            },
            {
              days: [
                { date: 24 },
                { date: 25 },
                { date: 26 },
                { date: 27 },
                { date: 28 }
              ]
            }
          ],
          year: 2019
        },
        {
          name: "April",
          weeks: [
            {
              days: [
                { date: null },
                { date: null },
                { date: null },
                { date: null },
                { date: null },
                { date: 1 },
                { date: 2 }
              ]
            },
            {
              days: [
                { date: 3 },
                { date: 4 },
                { date: 5 },
                { date: 6 },
                { date: 7 },
                { date: 8 },
                { date: 9 }
              ]
            },
            {
              days: [
                { date: 10 },
                { date: 11 },
                { date: 12 },
                { date: 13 },
                { date: 13 },
                { date: 15 },
                { date: 16 }
              ]
            },
            {
              days: [
                { date: 17 },
                { date: 18 },
                { date: 19 },
                { date: 20 },
                { date: 21 },
                { date: 22 },
                { date: 23 }
              ]
            },
            {
              days: [
                { date: 24 },
                { date: 25 },
                { date: 26 },
                { date: 27 },
                { date: 28 }
              ]
            }
          ],
          year: 2019
        }
      ]
    };
  }


  render() {
    return (
      <div className="all-months">
        {this.state.months.map((month, idx) => {
          return (
            <Month
              weeklabel={this.state.monthLabel}
              selectedDay={this.state.selectedDay}
              month={month}
              key={idx}
            />
          );
        })}
      </div>
    );
  }
}

export default Calendar;
