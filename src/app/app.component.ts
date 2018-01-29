import { Component } from '@angular/core';


import { AppState } from '../redux/redux.module';
import { StateActions } from '../redux/stateActions';
import { Store, Action } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(
		public store: Store<AppState>,
		) {}
  title = 'app';
  
  fireTheAction(): void {
    this.store.dispatch(StateActions.basicAction)
  }
  
}
