import PropTypes from 'prop-types';
import {
  Title,
  StatSection,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
  TitleWrap,
} from './Statistics.styled';
import { randomColor } from './RandomColor';

export function Statistics({ title, stats }) {
  return (
    <StatSection>
      <TitleWrap>{title && <Title>{title}</Title>}</TitleWrap>

      <StatList>
        {stats.map(({ id, percentage, label }) => {
          return (
            <StatItem key={id} style={{ backgroundColor: randomColor() }}>
              <StatLabel>{label}</StatLabel>
              <StatPercentage>{percentage}%</StatPercentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatSection>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
