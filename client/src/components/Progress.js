import React, { Component } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

class Progress extends Component {
    
    render() {
        return ( 
            <div>
                <div className="row">
                    <div className="col-12 col-sm-6">
                
                
                        <CalendarHeatmap
                            startDate={new Date('2019-01-01')}
                            endDate={new Date('2019-05-01')}
                            values={[
                                { date: '2019-04-20' },
                                { date: '2019-04-21' },
                                { date: '2016-04-22' },
                                { date: '2016-04-22' },
                                { date: '2016-04-22' },
                                { date: '2016-04-23' },
                                // ...and so on
                            ]}
                        />
                      
                    </div>
                </div>
            </div>
        )
    
    }
}
export default Progress;