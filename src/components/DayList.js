import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days } = props;

  const dayItem = days.map((day) => <DayListItem key={day.dayNumber} {...day}/> );

  return (
    <ul>
      {dayItem}
    </ul>
  );
};