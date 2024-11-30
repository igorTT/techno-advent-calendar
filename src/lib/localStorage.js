import { tracks } from '../constants';

export const getDoorState = (day) => {
  return localStorage.getItem(`door-${day}`);
};

export const setDoorState = (day, state) => {
  localStorage.setItem(`door-${day}`, state);
};

export const resetCalendar = () => {
  tracks.forEach((_, i) => {
    localStorage.removeItem(`door-${i + 1}`);
  });
};

export const getDoorsOpened = () => {
  return Object.entries(localStorage)
    .filter(([, state]) => state === 'open')
    .map(([key]) => parseInt(key.split('-')[1]));
};
