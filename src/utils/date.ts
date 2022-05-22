import { Post } from '../types';

function randomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export const getRandomDate = () => randomDate(new Date(2012, 0, 1), new Date());

export const sortByDate = (prev: Post, next: Post) => next.date.getTime() - prev.date.getTime();
