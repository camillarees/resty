import React from 'react';
import { useState, useEffect } from 'react';

import './results.scss';

const Results = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <section>
      {
        props.loading ?
          <pre>Loading...</pre> :
          <pre data-testid="results-output">{data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      }
    </section>
  );
}

export default Results;
