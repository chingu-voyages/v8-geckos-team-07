import React, { Component } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import ReactTooltip from 'react-tooltip';

class CalHM extends Component {

    render() {
        return (
            <div>
                <CalendarHeatmap
                    startDate={new Date('2019-01-01')}
                    endDate={new Date('2019-05-01')}
                    values={[
                        { date: '2019-04-20', count: 1 },
                        { date: '2019-04-21', count: 4 },
                        { date: '2019-04-22', count: 3 },
                        { date: '2019-04-23', count: 1 },
                        // ...and so on
                    ]}

                    classForValue={(value) => {
                      if (!value) {
                        return 'color-empty';
                      }
                      return `color-gitlab-${value.count}`;
                    }}
                  />
                <ReactTooltip />
            </div>
        )

    }
}
export default CalHM;