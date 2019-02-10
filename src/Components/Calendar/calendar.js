import React from "react";
import Month from "./months";
import './calendar.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    const stringDay = new Date().toLocaleString().slice(0, 9);

    this.state = {
      borderRed: false,
      selectedDay: stringDay,
      monthLabel: ["Sun ", "Mon ", "Tue ", "Wed ", "Thu ", "Fri ", "Sat "],
      months: [
        {
          name: "January",
          weeks: [
            {
              days: [
                { date: null, highlighted: false, timestamp: "" },
                { date: null, highlighted: false, timestamp: "" },
                { date: null, highlighted: false, timestamp: "" },
                { date: null, highlighted: false, timestamp: "" },
                { date: null, highlighted: false, timestamp: "" },
                { date: 1, highlighted: true, timestamp: "1/1/2019" },
                { date: 2, highlighted: false, timestamp: "1/2/2019" }
              ]
            },
            {
              days: [
                { date: 3, highlighted: false, timestamp: "1/3/2019"  },
                { date: 4, highlighted: true, timestamp: "1/4/2019"  },
                { date: 5, highlighted: true, timestamp: "1/5/2019"  },
                { date: 6, highlighted: true, timestamp: "1/6/2019"  },
                { date: 7, highlighted: false, timestamp: "1/7/2019"  },
                { date: 8, highlighted: true, timestamp: "1/8/2019"  },
                { date: 9, highlighted: false, timestamp: "1/9/2019"  }
              ]
            },
            {
              days: [
                { date: 10, highlighted: false, timestamp: "1/10/2019"  },
                { date: 11, highlighted: true, timestamp: "1/11/2019"  },
                { date: 12, highlighted: false, timestamp: "1/12/2019"  },
                { date: 13, highlighted: true, timestamp: "1/13/2019"  },
                { date: 14, highlighted: true, timestamp: "1/14/2019"  },
                { date: 15, highlighted: true, timestamp: "1/15/2019"  },
                { date: 16, highlighted: false, timestamp: "1/16/2019"  }
              ]
            },
            {
              days: [
                { date: 17, highlighted: false, timestamp: "1/17/2019"   },
                { date: 18, highlighted: false, timestamp: "1/18/2019"   },
                { date: 19, highlighted: true, timestamp: "1/19/2019"  },
                { date: 20, highlighted: false, timestamp: "1/20/2019"  },
                { date: 21, highlighted: false, timestamp: "1/21/2019"  },
                { date: 22, highlighted: true, timestamp: "1/22/2019"  },
                { date: 23, highlighted: true, timestamp: "1/23/2019"  }
              ]
            },
            {
              days: [
                { date: 24, highlighted: true, timestamp: "1/24/2019"  },
                { date: 25, highlighted: false, timestamp: "1/25/2019"  },
                { date: 26, highlighted: true, timestamp: "1/26/2019"  },
                { date: 27, highlighted: true, timestamp: "1/27/2019"  },
                { date: 28, highlighted: true, timestamp: "1/28/2019"  }
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
                { date: 1, highlighted: true, timestamp: "2/1/2019"  },
                { date: 2, highlighted: false, timestamp: "2/2/2019"  }
              ]
            },
            {
              days: [
                { date: 3, highlighted: false, timestamp: "2/3/2019"  },
                { date: 4, highlighted: true, timestamp: "2/4/2019"  },
                { date: 5, highlighted: true, timestamp: "2/5/2019"  },
                { date: 6, highlighted: true, timestamp: "2/6/2019"  },
                { date: 7, highlighted: true, timestamp: "2/7/2019"  },
                { date: 8, highlighted: true, timestamp: "2/8/2019"  },
                { date: 9, highlighted: false, timestamp: "2/9/2019" }
              ]
            },
            {
              days: [
                { date: 10, highlighted: true, timestamp: "2/10/2019"  },
                { date: 11, highlighted: true, timestamp: "2/11/2019"  },
                { date: 12, highlighted: true, timestamp: "2/12/2019"  },
                { date: 13, highlighted: true, timestamp: "2/13/2019"  },
                { date: 13, highlighted: false, timestamp: "2/14/2019"  },
                { date: 15, highlighted: false, timestamp: "2/15/2019"  },
                { date: 16, highlighted: true, timestamp: "2/16/2019"  }
              ]
            },
            {
              days: [
                { date: 17, highlighted: false, timestamp: "2/17/2019" },
                { date: 18, highlighted: false, timestamp: "2/18/2019" },
                { date: 19, highlighted: true, timestamp: "2/19/2019" },
                { date: 20, highlighted: false, timestamp: "2/20/2019" },
                { date: 21, highlighted: true, timestamp: "2/21/2019" },
                { date: 22, highlighted: false, timestamp: "2/22/2019" },
                { date: 23, highlighted: false, timestamp: "2/23/2019" }
              ]
            },
            {
              days: [
                { date: 24, highlighted: false, timestamp: "2/24/2019" },
                { date: 25, highlighted: true, timestamp: "2/25/2019" },
                { date: 26, highlighted: true, timestamp: "2/26/2019" },
                { date: 27, highlighted: false, timestamp: "2/27/2019" },
                { date: 28, highlighted: true, timestamp: "2/28/2019" },
                { date: 29, highlighted: true, timestamp: "2/29/2019" },
                { date: 30, highlighted: true, timestamp: "2/30/2019" }
              ]
            },
            { days: [{ date: 31, highlighted: true, timestamp: "2/31/2019" }] }
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


  changeColor = () => {
    this.setState({ borderRed: !this.state.borderRed})
  }

  render() {
    return (
      <div className="all-months">
        {this.state.months.map((month, idx) => {
          return (
            <Month
              weeklabel={this.state.monthLabel}
              selectedDay={this.state.selectedDay}
              selDay={this.changeColor}
              month={month}
              key={idx}
              border={this.state.borderRed}
            />
          );
        })}
      </div>
    );
  }
}

export default Calendar;
