import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { CommandType } from "src/app/model/Command";
import { FirebaseService } from "src/app/services/firebase";

@Component({
    selector: 'app-game-round-starting',
    templateUrl: './round-starting.component.html',
    styleUrls: ['./round-starting.component.scss']
})
export class RoundStartingComponent {
    
    constructor() {
        
    }

}