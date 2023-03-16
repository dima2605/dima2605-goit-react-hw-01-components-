import PropTypes from 'prop-types';
import { TransitionColum, TransitionTable } from './TransactionItem.stuled';

export function TransitionItem({ type, amount, currency }) {
  return (
    <TransitionTable>
      <TransitionColum>{type}</TransitionColum>
      <TransitionColum>{amount}</TransitionColum>
      <TransitionColum>{currency}</TransitionColum>
    </TransitionTable>
  );
}

TransitionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
