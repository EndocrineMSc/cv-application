function TimelineButton({ addTimespan }) {
  const handleButtonClick = () => {
    addTimespan({
      startYear: '2022',
      endYear: null,
      institute: 'Roche',
      title: 'Test Job',
      details: ['a', 'b'],
    });
  };

  return (
    <button type="button" onClick={handleButtonClick}>
      Add
    </button>
  );
}

export default TimelineButton;
