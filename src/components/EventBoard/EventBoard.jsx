import PropTypes from 'prop-types';
import { EventCards } from 'components/EventCards/EventCards';

import css from './EventBoard.module.css';

export const EventBoard = ({ events }) => {
  return (
    <div className={css.eventBoard}>
      {events.map(({ name, location, speaker, type, time }) => (
        <EventCards
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </div>
  );
};

EventBoard.protoType = {
  events: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      time: PropTypes.exact({
        start: PropTypes.string.isRequired,
        end: PropTypes.string.isRequired,
      }),
    })
  ),
};
