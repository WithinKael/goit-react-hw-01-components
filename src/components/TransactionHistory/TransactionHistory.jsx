import css from './transaction.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactions}>
      <thead className={css.tableHead}>
        <tr className={css.tableTr}>
          <th className={css.tableTh}>Type</th>
          <th className={css.tableTh}>Amount</th>
          <th className={css.tableTh}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(element => {
          return (
            <tr key={element.id} className={css.tableTr}>
              <td className={css.tableTd}>{element.type}</td>
              <td className={css.tableTd}>{element.amount}</td>
              <td className={css.tableTd}>{element.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
