import Field from './Field';
import { storiesOf } from '@storybook/react';
export default {
  title: "Field",
  component: Field,
}

export const Default = () => <Field />

export const Enlarged = () => <Field vertCellCount={15} horizCellCount={15} />