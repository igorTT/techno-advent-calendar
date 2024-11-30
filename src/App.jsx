import { useState } from 'react';

import Calendar from './components/Calendar';
import { tracks } from './constants';
import { getDoorsOpened, setDoorState } from './lib/localStorage';

function App() {
  const today = new Date().getDate();
  const [openedDoors, setOpenedDoors] = useState(getDoorsOpened());

  const onOpenDoor = (day) => {
    setOpenedDoors([...openedDoors, day]);
    setDoorState(day, 'open');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[url('/assets/bg.webp')] bg-fixed bg-cover bg-center text-foreground">
      <Calendar
        tracks={tracks}
        openedDoors={openedDoors}
        onOpenDoor={onOpenDoor}
        today={today}
      />
    </div>
  );
}

export default App;
