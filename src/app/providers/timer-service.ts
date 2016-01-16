import {Injectable} from 'angular2/core';

@Injectable()
export class TimerService {
  counter = 0;
  interval;
  reset() {
    this.counter = 0;
  }
  constructor() {
    this.interval = setInterval(() => {
      this.counter++;
    }, 1000);
  }
}
