import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { GameComponent } from "./pages/game/game.component";
import { StatsComponent } from "./pages/stats/stats.component";

const routes : Routes = [
    { path: '', component: GameComponent },
    { path: 'game', component: GameComponent },
    { path: 'stats', component: StatsComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRouting {}