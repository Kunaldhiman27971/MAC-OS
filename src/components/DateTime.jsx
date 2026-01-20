import React, { useEffect, useState } from 'react';

const formatDateTime = (date) => {
  const datePart = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const meridiem = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  return `${datePart} ${hours}:${minutes}${meridiem}`;
};

const DateTime = () => {
  const [value, setValue] = useState(() => formatDateTime(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setValue(formatDateTime(new Date()));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{value}</div>;
};

export default DateTime;
