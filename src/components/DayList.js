import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, day, setDay } = props;

  const dayItem = days.map((item, index) => <DayListItem 
  key={index} {...item} 
  setDay={setDay} 
  selected={item.name === day}
  /> );

  return (
    <ul>
      {dayItem}
    </ul>
  );
};