import React from "react";
import classNames from "classnames";
import styles from "./DayListItem.scss"


export default function DayListItem(props) {
  const classes = classNames({
    'day-list__item': true,
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  });
  const { name, spots, setDay } = props;

  return (
    <li onClick={() => setDay(props.name)} className={classes}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{spots} spots remaining</h3>
    </li>
  );
};