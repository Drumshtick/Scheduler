import React from 'react';

import './styles.scss';
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Status from './Status';

export default function Appointment(props) {
  const { time, interview, interviewers, id, bookInterview } = props;
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const SAVING = 'SAVING';
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    bookInterview(id, interview)
    .then((resp) => {
      transition(SHOW);
    });
  }

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE) } />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
        />
      )}
      {mode === SAVING && <Status />}
      {mode === CREATE && (
        <Form
          id={id}
          interviewers={interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
    </article>
  );
};