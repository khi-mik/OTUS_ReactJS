import Cell from './Cell';

export default {
  title: "Cell",
  component: Cell,
}

export const Default = () => <Cell />

export const nonDefaultID = () => <Cell id={123} />
