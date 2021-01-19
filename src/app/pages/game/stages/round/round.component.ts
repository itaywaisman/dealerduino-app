import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-game-round',
    templateUrl: './round.component.html',
    styleUrls: ['./round.component.scss']
})
export class RoundComponent {

    @Input() roundNumber : number;

}