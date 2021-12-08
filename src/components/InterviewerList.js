import React from "react";

import "./InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  const { interviewers, onChange, value } = props;
  const interviewerItem = interviewers.map((i) => 
  <InterviewerListItem
    key={i.id} 
    name={i.name}
    avatar={i.avatar}
    interviewer={i} 
    selected={i.id === value} 
    setInterviewer={() => onChange(i.id)}
  />);

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewerItem}
      </ul>
    </section>
  );
};