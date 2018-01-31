import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AppState } from '../redux/redux.module';
import * as example from '../redux/example';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ids$: Observable<string[]>;
	constructor(
		public store: Store<AppState>,
		) {
    this.ids$ = this.store.select((state: AppState) => { return example.getIds(state.example); });
  }
  title = 'app';

  fireTheAction(): void {
    this.store.dispatch(new example.TriggerAction(Date.now().toString(10)));
  }

}
