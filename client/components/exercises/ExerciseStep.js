import React from 'react';

const ExerciseStep = ({
  input: { value },
  number,
  onClick,
  active,
}) => (
  <div
    className={"list-group-item list-group-horizontal-item-action justify-content-between" + (active ? " active" : "") }
    style={{ cursor: 'pointer' }}
    onClick={onClick}
  >
    <h6 className="my-0">Etapa {number}</h6>
    <small>Limite de até {value.limit || 'X'} símbolos</small>
  </div>
);

export default ExerciseStep;
