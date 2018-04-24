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
    <small>Quantidade de {String(value.limit || 'XX').padStart(2, '0')} símbolos</small>
  </div>
);

export default ExerciseStep;
