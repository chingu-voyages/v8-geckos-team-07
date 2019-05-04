import React, { Component } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import ReactTooltip from 'react-tooltip';
import moment from 'moment';

const effortLookup = {
    "skip": 0,
    "failed": 1,
    "tried": 2,
    "completed": 3,
    "killed-it": 4
}

// FYI - db date format is 'May 2nd 2019'

const CalHM = ({date, checkins, length}) => {
    // Hack to not have terrible scaling - at least 3 months
    const calendarLength = length >= 3 ? length : 3;
    return (
        <div>
            <CalendarHeatmap
                startDate={date}
                endDate={moment(date).add(30 * calendarLength, 'days').toDate()}

                values={checkins.map(checkin => ({
                    date: moment(checkin.checkinDate, 'MMMM DD YYYY').toDate(),
                    count: effortLookup[checkin.effort]
                }))}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-github-${value.count}`;
                }}

                tooltipDataAttrs={value => {
                    return {
                        'data-tip': `${value}`,
                    };
                }}
                showWeekdayLabels={true}
                onClick={value => alert(`Clicked on value with count: ${value.count}`)}


                
            />
            <ReactTooltip />
        </div>
    )
}

export default CalHM;