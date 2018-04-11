import React from 'react';

const ExerciseStep = ({
  input: { value },
  number,
  onClick,
  active,
}) => (
  <a
    className={"list-group-item list-group-horizontal-item-action justify-content-between" + (active ? " active" : "") }
    href={`#etapa-${number}`}
    onClick={onClick}
  >
    <h6 className="my-0">Etapa {number}</h6>
    <small>Limite de até {value.limit || 'X'} símbolos</small>
  </a>
);

export default ExerciseStep;
