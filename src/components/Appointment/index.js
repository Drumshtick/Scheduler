import React from 'react';

import './styles.scss';
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props) {
  const { time, interview, student } = props;
  return (
    <article className="appointment">
      <Header time={time} />
      {interview ? <Show student={student} {...interview} /> : <Empty />}
    </article>
  );
};