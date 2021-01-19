import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-game-end',
    templateUrl: './game-end.component.html',
    styleUrls: ['./game-end.component.scss']
})
export class GameEndComponent {
    @Input() public winnerName: string;
}