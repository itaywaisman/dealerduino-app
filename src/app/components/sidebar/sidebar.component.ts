import { Component } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class Sidebar {

    constructor(private firebaseService: FirebaseService) {}

    public resetGame() {
        this.firebaseService.reset();
    }
}