import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventStart, formatEventDuration } from '../utils';
import { iconSize } from '../constants';
import css from './EventCards.module.css';

export const EventCards = ({ name, location, speaker, type, start, end }) => {
  const formatStart = formatEventStart(start);
  const formatDuration = formatEventDuration(start, end);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={iconSize.sm} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={iconSize.sm} />
        {formatStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} size={iconSize.sm} />
        {formatDuration}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};

EventCards.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
