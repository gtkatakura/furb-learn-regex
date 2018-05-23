import { replace } from 'react-router-redux';
import WebApi from 'services/WebApi';
import confirm from 'util/confirm';

const create = ({ exerciseId, regularExpression }) => async dispatch => {
  const response = await new WebApi(`/api/student/me/exercises/${exerciseId}/solution`).create({
    solution: regularExpression,
  });

  const data = await response.json();

  if (data.error) {
    await confirm(
      'A expressão regular especificada não validou todas as palavras que pertencem à linguagem ou validou palavras que não pertencem. ' +
      'Para auxiliar na resolução, outras palavras foram adicionadas nos campos palavras válidas e inválidas.',
    );

    dispatch({
      type: 'RESOLUTION_FETCH_SUCCEEDED',
      payload: {
        currentStep: data.data.nextStep,
      },
    });
  } else {
    await confirm('Resposta correta.');

    dispatch(replace('/minhas-atividades/em-andamento'));
  }
};

export default create;
