import React from "react";
import classNames from 'classnames';

import styles from "./InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const { id, name, avatar, setInterviewer, selected } = props;

  const interviewerListItemClasses = classNames({
    'interviewers__item-imag': true,
    'interviewers__item--selected': selected, 
  });

  return (
    <li 
    className={interviewerListItemClasses}
    onClick={() => setInterviewer(id)}
    >
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {name}
    </li>
  );
};