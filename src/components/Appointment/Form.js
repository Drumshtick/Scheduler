import React, { useState } from 'react';

import InterviewerList from '../InterviewerList';
import Button from '../Button';

export default function Form(props) {
  const { interviewers, onSave, onCancel } = props;

  const [ student, setStudent ] = useState(props.student || "");
  const [ interviewer, setInterviewer ] = useState(props.interviewer || null);
  const [ error, setError ] = useState("");

  const reset = () => {
    setStudent('');
    setInterviewer(null);
  };

  const cancel = () => {
    reset();
    onCancel();
  };

  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    onSave(student, interviewer);
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
            data-testid="student-name-input"
          />
        </form>
        <section className="appointment__validation" data-testid="error-msg">{error}</section>
        <InterviewerList 
          interviewers={interviewers}
          onChange={setInterviewer}
          value={interviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
  );
};