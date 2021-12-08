import React from "react";

import styles from "./InterviewerList.scss"
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {
  const { interviewers, interviewer, setInterviewer } = props;
  const interviewerItem = interviewers.map((i, index) => <InterviewerListItem key={index} {...i} interviewer={interviewer} selected={i.id === interviewer} setInterviewer={setInterviewer}/>); 
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {interviewerItem}
      </ul>
    </section>
  );
};