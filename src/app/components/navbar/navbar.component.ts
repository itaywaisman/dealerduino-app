import { Component, Output, EventEmitter } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase";
import { StateService } from "src/app/services/state";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class Navbar {

    @Output() menuClick = new EventEmitter();

    public isCollapsed = true;

    constructor(private firebaseService: FirebaseService) {}

    public resetGame() {
        this.firebaseService.reset();
    }
}