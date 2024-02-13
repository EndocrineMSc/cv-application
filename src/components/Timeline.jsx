import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import Timespan from "./Timespan";
import TimelineButton from "./TimelineButton";

function Timeline(props) {
    const [timespans, setTimespan] = useState([]);
    
    const addTimespan = function({startYear, endYear, institute, title, details}) {
        setTimespan((prevExperiences) => 
            [...prevExperiences, {key: uuidv4(), startYear, endYear, institute, title, details}]
        );
    }

    return (
        <div className={props.headerText}>
            <h1>{props.headerText}</h1>
            {timespans.map((timespan) => {
                return (
                    <Timespan 
                    key={timespan.key}
                    startYear={timespan.startYear}
                    endYear={timespan.endYear}
                    institute={timespan.institute}
                    title={timespan.title}
                    details={timespan.details}
                    />
                );
            })}
            <TimelineButton addTimespan={addTimespan}/>
        </div>
    )
}

export default Timeline;