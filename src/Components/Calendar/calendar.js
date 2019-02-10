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
                { date: 1, highlighted: true },
                { date: 2, highlighted: false }
              ]
            },
            {
              days: [
                { date: 3, highlighted: false },
                { date: 4, highlighted: true },
                { date: 5, highlighted: true },
                { date: 6, highlighted: true },
                { date: 7, highlighted: false },
                { date: 8, highlighted: true },
                { date: 9, highlighted: false }
              ]
            },
            {
              days: [
                { date: 10, highlighted: false },
                { date: 11, highlighted: true },
                { date: 12, highlighted: false },
                { date: 13, highlighted: true },
                { date: 13, highlighted: true },
                { date: 15, highlighted: true },
                { date: 16, highlighted: false }
              ]
            },
            {
              days: [
                { date: 17, highlighted: false },
                { date: 18, highlighted: false },
                { date: 19, highlighted: true },
                { date: 20, highlighted: false },
                { date: 21, highlighted: false },
                { date: 22, highlighted: true },
                { date: 23, highlighted: true }
              ]
            },
            {
              days: [
                { date: 24, highlighted: true },
                { date: 25, highlighted: false },
                { date: 26, highlighted: true },
                { date: 27, highlighted: true },
                { date: 28, highlighted: true }
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
                { date: null, highlighted: false },
                { date: null, highlighted: false },
                { date: null, highlighted: false },
                { date: null, highlighted: false },
                { date: null, highlighted: false },
                { date: 1, highlighted: true },
                { date: 2, highlighted: false }
              ]
            },
            {
              days: [
                { date: 3, highlighted: false },
                { date: 4, highlighted: true },
                { date: 5, highlighted: true },
                { date: 6, highlighted: true },
                { date: 7, highlighted: true },
                { date: 8, highlighted: true },
                { date: 9, highlighted: false }
              ]
            },
            {
              days: [
                { date: 10, highlighted: true },
                { date: 11, highlighted: true },
                { date: 12, highlighted: true },
                { date: 13, highlighted: true },
                { date: 13, highlighted: false },
                { date: 15, highlighted: false },
                { date: 16, highlighted: true }
              ]
            },
            {
              days: [
                { date: 17, highlighted: false },
                { date: 18, highlighted: false },
                { date: 19, highlighted: true },
                { date: 20, highlighted: false },
                { date: 21, highlighted: true },
                { date: 22, highlighted: false },
                { date: 23, highlighted: false }
              ]
            },
            {
              days: [
                { date: 24, highlighted: false },
                { date: 25, highlighted: true },
                { date: 26, highlighted: true },
                { date: 27, highlighted: false },
                { date: 28, highlighted: true },
                { date: 29, highlighted: true },
                { date: 30, highlighted: true }
              ]
            },
            { days: [{ date: 31, highlighted: true }] }
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
                { date: 1, highlighted: true },
                { date: 2, highlighted: true }
              ]
            },
            {
              days: [
                { date: 3, highlighted: true },
                { date: 4, highlighted: true },
                { date: 5, highlighted: true },
                { date: 6, highlighted: false },
                { date: 7, highlighted: false },
                { date: 8, highlighted: true },
                { date: 9, highlighted: true }
              ]
            },
            {
              days: [
                { date: 10, highlighted: false },
                { date: 11, highlighted: true },
                { date: 12, highlighted: true },
                { date: 13, highlighted: true },
                { date: 13, highlighted: true },
                { date: 15, highlighted: false },
                { date: 16, highlighted: true }
              ]
            },
            {
              days: [
                { date: 17, highlighted: true },
                { date: 18, highlighted: true },
                { date: 19, highlighted: true },
                { date: 20, highlighted: true },
                { date: 21, highlighted: true },
                { date: 22, highlighted: true },
                { date: 23, highlighted: false }
              ]
            },
            {
              days: [
                { date: 24, highlighted: true },
                { date: 25, highlighted: true },
                { date: 26, highlighted: false },
                { date: 27, highlighted: false },
                { date: 28, highlighted: false }
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
                { date: 1, highlighted: true },
                { date: 2, highlighted: true }
              ]
            },
            {
              days: [
                { date: 3, highlighted: true },
                { date: 4, highlighted: true },
                { date: 5, highlighted: true },
                { date: 6, highlighted: true },
                { date: 7, highlighted: true },
                { date: 8, highlighted: true },
                { date: 9, highlighted: true }
              ]
            },
            {
              days: [
                { date: 10, highlighted: true },
                { date: 11, highlighted: true },
                { date: 12, highlighted: false },
                { date: 13, highlighted: false },
                { date: 14, highlighted: true },
                { date: 15, highlighted: true },
                { date: 16, highlighted: false }
              ]
            },
            {
              days: [
                { date: 17, highlighted: true },
                { date: 18, highlighted: false },
                { date: 19, highlighted: false },
                { date: 20, highlighted: false },
                { date: 21, highlighted: false },
                { date: 22, highlighted: false },
                { date: 23, highlighted: true }
              ]
            },
            {
              days: [
                { date: 24, highlighted: true },
                { date: 25, highlighted: true },
                { date: 26, highlighted: true },
                { date: 27, highlighted: true },
                { date: 28, highlighted: true }
              ]
            }
          ],
          year: 2019
        }
      ]
    };
  }


  selectedDay = () => {
    console.log('inside')
  }

  render() {
    return (
      <div className="all-months">
        {this.state.months.map((month, idx) => {
          return (
            <Month
              weeklabel={this.state.monthLabel}
              selectedDay={this.state.selectedDay}
              selDay={this.selectedDay}
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
