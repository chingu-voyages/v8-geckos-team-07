import React, { Component } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import ReactTooltip from 'react-tooltip';

class Progress extends Component {
    
    render() {
        return ( 
            <div>
                
                
                
                        <CalendarHeatmap
                            startDate={new Date('2019-01-01')}
                            endDate={new Date('2019-12-01')}
                            values={[
                                { date: '2019-04-20' },
                                { date: '2019-04-21' },
                                { date: '2016-04-22' },
                                { date: '2016-04-23' },
                                // ...and so on
                            ]}
                        />
                      
                  
               
                <ReactTooltip />
            </div>
        )
    
    }
}
export default Progress;