import React from "react";
import classNames from 'classnames';

import "./InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const { name, avatar, onChange, selected } = props;

  const interviewerListItemClasses = classNames({
    'interviewers__item-imag': true,
    'interviewers__item--selected': selected, 
  });

  return (
    <li 
    className={interviewerListItemClasses}
    onClick={onChange}
    >
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {selected && name}
    </li>
  );
};