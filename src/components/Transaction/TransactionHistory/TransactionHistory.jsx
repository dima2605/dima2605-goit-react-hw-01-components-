import PropTypes from 'prop-types';

import { HistoryHead, HistoryTable } from './TransactionHistory.styled';
import { TransitionItem } from '../TransactionItem/TransactionItem';

export function TransactionHistory({ items }) {
  return (
    <HistoryTable>
      <HistoryHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </HistoryHead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransitionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </HistoryTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ),
};
