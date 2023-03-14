import PropTypes from 'prop-types';
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from 'react-icons/fa';
import { formatEventStart, formatEventDuration } from '../utils';
import { iconSize } from '../constants';
import { Card, EventName, Info, Chip } from './EventCards.styled';
import css from './EventCards.module.css';

export const EventCards = ({ name, location, speaker, type, start, end }) => {
  const formatStart = formatEventStart(start);
  const formatDuration = formatEventDuration(start, end);
  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sm} />
        {formatStart}
      </Info>
      <Info>
        <FaClock size={iconSize.sm} />
        {formatDuration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};
// className={`${css.chip} ${css[type]}`}
EventCards.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
