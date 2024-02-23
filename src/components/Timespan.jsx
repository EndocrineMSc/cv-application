import { v4 as uuidv4 } from 'uuid';

function Timespan({
  startYear, endYear, institute, title, details,
}) {
  return (
    <>
      <h2 className="timespan">
        {startYear}
        {' '}
        -
        {' '}
        {endYear || 'jetzt'}
        {' '}
        &middot;
        {' '}
        {institute}
        {' '}
        &middot;
        {' '}
        {title}
      </h2>
      <ul className="timespan">
        {details
          ? details.map((detail) => (
            <li key={uuidv4()}>{detail}</li>
          ))
          : null}
      </ul>
      <TimespanForm {...{
        startYear, endYear, institute, title,
      }}
      />
    </>
  );
}

function TimespanForm({
  startYear, endYear, institute, title,
}) {
  return (
    <div className="formContainer">
      <label htmlFor="formStartYear">
        Arbeitsbeginn (Jahr)
        <input
          type="text"
          id="formStartYear"
          defaultValue={startYear || ''}
        />
      </label>

      <label htmlFor="formEndYear">
        Arbeitsende (Jahr/Leer)
        <input
          type="text"
          id="formEndYear"
          defaultValue={endYear || ''}
        />
      </label>

      <label htmlFor="formInstitute">
        Institut
        <input
          type="text"
          id="formInstitute"
          defaultValue={institute || ''}
        />
      </label>

      <label htmlFor="formTitle">
        Bezeichnung
        <input
          type="text"
          id="formTitle"
          defaultValue={title || ''}
        />
      </label>
    </div>
  );
}

export default Timespan;
