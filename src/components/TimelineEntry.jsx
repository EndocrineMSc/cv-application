import { useState } from 'react';
import TimelineEntryForm from './TimelineEntryForm';
import { eventHandler, TIMESPAN_EDITED } from '../eventhandler';

function TimelineEntry({
  spanKey, startYear, endYear, institute, title, details,
}) {
  const [spanInfo, setSpanInfo] = useState({
    spanStartYear: startYear || '',
    spanEndYear: endYear || 'jetzt',
    spanInstitute: institute || '',
    spanTitle: title || '',
    spanDetails: details,
  });

  const [firstRender, setFirstRender] = useState(true);

  const editTimespan = (data) => {
    if (data.spanKey === spanKey) {
      setSpanInfo({
        spanStartYear: data.formStartYear,
        spanEndYear: data.formEndYear,
        spanInstitute: data.formInstitute,
        spanTitle: data.formTitle,
        spanDetails: data.formDetails,
      });
    }
  };

  if (firstRender) {
    eventHandler.subscribe(TIMESPAN_EDITED, editTimespan);
    setFirstRender(false);
  }

  return (
    <>
      <h2 className="timespan">
        {spanInfo.spanStartYear}
        {' '}
        -
        {' '}
        {spanInfo.spanEndYear}
        {' '}
        &middot;
        {' '}
        {spanInfo.spanInstitute}
        {' '}
        &middot;
        {' '}
        {spanInfo.spanTitle}
      </h2>
      <ul className="timespan">
        {spanInfo.spanDetails
          ? spanInfo.spanDetails.map((detail) => (
            <li key={detail.id}>{detail.text}</li>
          ))
          : null}
      </ul>
      <TimelineEntryForm
        spanKey={spanKey}
        startYear={spanInfo.spanStartYear}
        endYear={spanInfo.spanEndYear}
        institute={spanInfo.spanInstitute}
        title={spanInfo.spanTitle}
      />
    </>
  );
}

export default TimelineEntry;
