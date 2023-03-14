import PropTypes from 'prop-types';
import { EventCards } from 'components/EventCards/EventCards';
import { ContainerBoard } from './EventBoard.steled';

export const EventBoard = ({ events }) => {
  return (
    <ContainerBoard>
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
    </ContainerBoard>
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
