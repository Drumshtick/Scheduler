import React from "react";
import classNames from "classnames";
import styles from "./DayListItem.scss"


export default function DayListItem(props) {
  const formatSpots = (spots) => {
    if (spots === 0) {
      return "no spots remaining";
    }

    if (spots === 1) {
      return "1 spot remaining";
    }

    return `${spots} spots remaining`
  };

  const classes = classNames({
    'day-list__item': true,
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  });
  const { name, spots, setDay } = props;

  return (
    <li onClick={() => setDay(name)} className={classes}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
};