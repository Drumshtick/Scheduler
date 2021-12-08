import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, value, onChange } = props;

  const dayItem = days.map((item, index) => {
    return (
      <DayListItem 
        key={index} 
        {...item} 
        onChange={() => onChange(item.name)} 
        selected={item.name === value}
      />);
    });

  return (
    <ul>
      {dayItem}
    </ul>
  );
};