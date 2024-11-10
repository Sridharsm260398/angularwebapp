import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { decrement, increment } from '../../store/counter.action';
import { AsyncPipe } from '@angular/common';
import { selectCount } from '../../store/counter.selector';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [SharedModule,FormsModule,AsyncPipe],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  count$ : Observable<number>
  constructor(private store: Store<{counter:number}> ){
    this.count$ = store.select(selectCount);
  }
onIncrement(){
this.store.dispatch(increment({value:2}))
}
onDecrement(){
  this.store.dispatch(decrement({value:2}))
}
}
