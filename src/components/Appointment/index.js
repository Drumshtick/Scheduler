import React from 'react';

import './styles.scss';
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';

export default function Appointment(props) {
  const { time, interview, interviewers, id, bookInterview, cancelInterview } = props;
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const SAVING = 'SAVING';
  const CONFIRM = 'CONFIRM';
  const EDIT = 'EDIT';
  const DELETING = 'DELETING';
  const ERROR_SAVE = 'ERROR_SAVE';
  const ERROR_DELETE = 'ERROR_DELETE';
  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING, true);
    bookInterview(id, interview)
    .then(() => {
      transition(SHOW);
    })
    .catch(() => {
      transition(ERROR_SAVE, true);
    });
  }

  function destroy(id) {
    transition(DELETING, true);
    cancelInterview(id)
    .then(() => {
      transition(EMPTY);
    })
    .catch(() => {
      transition(ERROR_DELETE, true);
    });
  };

  function confirm() {
    transition(CONFIRM)
  };

  function edit() {
    transition(EDIT);
  }

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE) } />}
      {mode === SHOW && (
        <Show
          student={interview.student}
          interviewer={interview.interviewer}
          onDelete={confirm}
          onEdit={edit}
          id={id}
        />
      )}
      {mode === CREATE && (
        <Form
          id={id}
          interviewers={interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === EDIT && (
        <Form
          student={interview.student}
          // If interview was not set (IDK if this is ok, but it fixes errors)
          interviewer={!interview.interviewer ? null : interview.interviewer.id}
          id={id}
          interviewers={interviewers}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === CONFIRM && (
        <Confirm
          message={"Are you sure you would like to delete?"}
          id={id}
          onConfirm={destroy}
          onCancel={back}
        />
        )}
      {mode === DELETING && <Status message={"Deleting"} />}
      {mode === ERROR_DELETE && (
        <Error
        message={"deleting item"}
        onClose={back}
        />
        )}
      {mode === ERROR_SAVE && (
        <Error
          message={"saving item"}
          onClose={back}
        />
        )}
    </article>
  );
};