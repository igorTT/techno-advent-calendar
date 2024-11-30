import PropTypes from 'prop-types';
import Door from './Door';

const Calendar = ({ tracks, openedDoors, onOpenDoor, today }) => {
  return (
    <div className="calendar-container">
      <div className="grid gap-4">
        {tracks.map((url, i) => {
          const doorNumber = i + 1;
          const isLocked = doorNumber > today;
          const isOpen = openedDoors.includes(doorNumber);
          const onOpen = () => {
            if (isLocked) return;

            onOpenDoor(doorNumber);
          };

          return (
            <Door
              key={url}
              day={doorNumber}
              track={url}
              isLocked={isLocked}
              isOpen={isOpen}
              onOpen={onOpen}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

Calendar.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.string).isRequired,
  openedDoors: PropTypes.arrayOf(PropTypes.number).isRequired,
  onOpenDoor: PropTypes.func.isRequired,
  today: PropTypes.number.isRequired,
};
