import {Component} from 'angular2/core';
import {TimerService} from '../../providers/timer-service';

@Component({
  selector: 'timer',
  providers: [
    TimerService
  ],
  pipes: [ ],
  template: require('./timer.html')
})
export class Timer {
  // TypeScript public modifiers
  constructor(public timerService: TimerService) {

  }
  ngOnInit() {
    console.log('Hello Timer Component');
  }

}
