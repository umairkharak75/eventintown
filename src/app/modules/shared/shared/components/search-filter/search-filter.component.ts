import { Component,  EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import {
	debounceTime,
	distinctUntilChanged,
} from 'rxjs/operators';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent  {
	inputControl = new FormControl();
	@Input() placeHolder:string;
	@Output() onkeyUp = new EventEmitter();
	@Output() onChangeEmitter = new EventEmitter();
	constructor() {
		/**
 * this observable will emit search text for every 3 seconds of delaytime and also
 * if text is updated on search input
 */
		this.inputControl.valueChanges
			.pipe(distinctUntilChanged(), debounceTime(300))
			.subscribe((data) => {
				
				if (this.inputControl.value !== null) {
					this.onkeyUp.emit(data);
				}
			});
	}	
}

