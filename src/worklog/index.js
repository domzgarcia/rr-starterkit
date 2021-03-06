import React from 'react';
import ItemCounter from './ItemCounter/itemCounter';
import './worklog.scss';

class Worklog extends React.Component {
    render(){
        return (
            <div id="worklog" className="Worklog">
              
              <div className="header cf">
                <div className="col-">
                  <span className="title">Worklog</span>
                </div>
                <div className="col-">
                  <div className="viewTab -active">Calendar</div>
                  <div className="viewTab">Time Tracker</div>
                </div>
              </div>

              <div className="timeRenderedWrap cf">
                <div className="dateSelectorWrap">
                  {/* We could use react date lib for this one */}
                  <input type="date"/>
                </div>
                <div className="previewTimeWrap">
                  <p>Total time logged: <span className="value">10 HRS 30 MINS</span></p>
                </div>
              </div>

              <div className="bodyProper">
                <div className="divider"></div>
                
                <div className="worklogEditorWrap cf">
                  <div className="dom-grid-col-5">
                    <div className="Select_Proj"></div>
                    <div className="Select_Proj"></div>
                  </div> 
                  <div className="dom-grid-col-3 should-align-right">
                    <div className="inlined">
                      <ItemCounter name="HOUR"/>
                    </div>
                    <div className="inlined">
                      <ItemCounter name="MINS"/>
                    </div>
                  </div> 
                  <div className="dom-grid-col-4 -withCustomPostion">
                    <button type="button" 
                    className="dom-btn -lightgreen shadowed">Add to logs</button>
                  </div> 
                </div>
 
                <div className="divider"></div>

              </div>
            </div>
          );      
    }
}

export default Worklog;
