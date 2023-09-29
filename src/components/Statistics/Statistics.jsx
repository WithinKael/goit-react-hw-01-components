import css from './statistics.module.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title !== null ? <h2 className={css.title}>{title}</h2> : null}

      <ul className={css.statList}>
        {stats.map(element => {
          const randomColor = getRandomColor();
          return (
            <li
              className={css.item}
              key={element.id}
              style={{ backgroundColor: randomColor }}
            >
              <span className={css.label}>{element.label}</span>
              <span className={css.percent}>{element.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
