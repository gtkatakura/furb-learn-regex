import React from 'react';
import { SelectField } from 'components/forms';

const ActivitySelect = ({ resources, ...props }) => (
  <SelectField label="Atividade" {...props}>
    {resources.map((resource => (
      <option value={JSON.stringify(resource)}>{resource.name}</option>
    )))}
  </SelectField>
);

export default ActivitySelect;
