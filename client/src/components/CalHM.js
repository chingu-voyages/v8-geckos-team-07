import React from 'react';
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

const CalHM = ({date, checkins, length, selectCheckin}) => {
    // Hack to not have terrible scaling - at least 3 months
    const calendarLength = length >= 3 ? length : 3;
    return (
        <div>
            <CalendarHeatmap
                startDate={moment(date).subtract(1,'days')}
                endDate={moment(date).add(30 * calendarLength, 'days')}
                values={checkins.map(checkin => ({
                    date: moment(checkin.checkinDate, 'MMMM DD YYYY').toDate(),
                    count: effortLookup[checkin.effort],
                    dateFriendly: checkin.checkinDate,
                    effort: checkin.effort
                }))}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-checkin-${value.count}`;
                }}

                tooltipDataAttrs={value => {
                    const dataTip = value.effort ? `On ${value.dateFriendly} you ${value.effort}` : ``;
                    return {
                       'data-tip': dataTip,
                    };
                }}
                showWeekdayLabels={true}
                onClick = { (value) => { 
                        if(value) { 
                            selectCheckin(value.dateFriendly);
                        } else {
                            selectCheckin();
                        }
                    }
                }


                
            />
            <ReactTooltip />
        </div>
    )
}

export default CalHM;