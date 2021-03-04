import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { CommandType } from "src/app/model/Command";
import { FirebaseService } from "src/app/services/firebase";

@Component({
    selector: 'app-game-dealing-card',
    templateUrl: './dealing-card.component.html',
    styleUrls: ['./dealing-card.component.scss']
})
export class DealingCardComponent {
    
    @Input() title : string = "";

    constructor() {
        
    }

}