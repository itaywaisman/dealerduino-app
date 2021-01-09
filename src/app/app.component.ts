import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import {DEALER_COMMANDS} from './commands.enum'
import { FirebaseService } from './services/firebase';
import { StateService } from './services/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dealerduino-app';


  constructor() {

  }

}
