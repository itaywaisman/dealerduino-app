import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class StateService {

    private readonly _sidebarOpen = new BehaviorSubject<boolean>(false);
    readonly sidebarOpen$ = this._sidebarOpen.asObservable();

    private get sidebarOpen(): boolean {
        return this._sidebarOpen.getValue();
    }

    private set sidebarOpen(val: boolean) {
        this._sidebarOpen.next(val);
    }

    public toogleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
    }
     

}