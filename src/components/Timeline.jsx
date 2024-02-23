import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Timespan from './Timespan';
import TimelineButton from './TimelineButton';

function Timeline({ headerText }) {
  const [timespans, setTimespan] = useState([]);

  const addTimespan = ({
    startYear, endYear, institute, title, details,
  }) => {
    setTimespan((prevExperiences) => [...prevExperiences, {
      key: uuidv4(), startYear, endYear, institute, title, details,
    }]);
  };

  return (
    <div className={headerText}>
      <h1>{headerText}</h1>
      {timespans.map((timespan) => (
        <Timespan
          key={timespan.key}
          startYear={timespan.startYear}
          endYear={timespan.endYear}
          institute={timespan.institute}
          title={timespan.title}
          details={timespan.details}
        />
      ))}
      <TimelineButton addTimespan={addTimespan} />
    </div>
  );
}

export default Timeline;
