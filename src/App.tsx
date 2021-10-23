import './App.css';
import React, { useState } from 'react'
import DatePicker, { DayValue, DayRange, Day } from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
// import { Typography } from '@mui/material';

function App() {
  const [day, setDay] = React.useState<DayValue>(null);
  const [dayRange, setDayRange] = React.useState<DayRange>({
    from: null,
    to: null
  });
  const [days, setDays] = React.useState<Day[]>([]);

  return (
    <>
      <DatePicker value={dayRange} onChange={setDayRange} />
    </>
  );
}

export default App;
