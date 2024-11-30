import PropTypes from 'prop-types';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { cn } from '../lib/utils';

const Door = ({ day, track, isLocked, onOpen, isOpen }) => {
  return (
    <Card
      className={cn(
        'bg-[url("/assets/card.webp")] bg-cover bg-center border-none rounded-lg overflow-hidden cursor-pointer shadow-lg',
        isLocked && 'cursor-not-allowed',
        'min-w-60 min-h-72',
      )}
      onClick={onOpen}
      disabled={isLocked}
    >
      <CardHeader className="bg-black/50">
        <CardTitle className="text-center">Day {day}</CardTitle>
      </CardHeader>
      <CardContent className={cn(isLocked && 'bg-black/50 h-full')}>
        {isOpen && (
          <div className="door-content">
            <iframe
              width="192"
              height="192"
              src={track}
              title={`Day ${day} Track`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Door;

Door.propTypes = {
  day: PropTypes.number.isRequired,
  track: PropTypes.string.isRequired,
  isLocked: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
