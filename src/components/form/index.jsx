import { application } from 'express';
import React from 'react';
import { useState } from 'react';

import './form.scss';

const Form = (props) => {

  const [method, setMethod] = useState('GET');

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    props.handleApiCall(url, method);
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        <span>URL: </span>
        <input  data-testid="form-input" name='url' type='text' />
        <button data-testid="go-button" type="submit">GO!</button>
      </label>
      <label className="methods">
        <span id="get" onClick={() => setMethod('GET')}>GET</span>
        <span id="post" onClick={() => setMethod('POST')}>POST</span>
        <span id="put" onClick={() => setMethod('PUT')}>PUT</span>
        <span id="delete" onClick={() => setMethod('DELETE')}>DELETE</span>
      </label>
    </form>
    </>
  );
}

export default Form;
