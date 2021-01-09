import { Component, Output, EventEmitter } from "@angular/core";
import { StateService } from "src/app/services/state";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class Navbar {

    @Output() menuClick = new EventEmitter();

    constructor(private state: StateService) {}

}