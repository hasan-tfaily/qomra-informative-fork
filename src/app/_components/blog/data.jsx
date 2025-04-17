import React from "react";

const DateStringConverter = ({ dateStr }) => {
  if (!dateStr || dateStr.length !== 10) {
    return <span>Invalid date format</span>;
  }

  const [month, day, year] = dateStr.split("/");

  // Ensure all parts exist and have correct lengths
  if (
    !month ||
    !day ||
    !year ||
    month.length !== 2 ||
    day.length !== 2 ||
    year.length !== 4
  ) {
    return <span>Invalid date format</span>;
  }

  return <span>{`${day}.${month}.${year}`}</span>;
};

export default DateStringConverter;
