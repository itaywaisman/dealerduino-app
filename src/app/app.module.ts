import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";


import { environment } from 'src/environments/environment';
import { Navbar } from './components/navbar/navbar.component';
import { StateService } from './services/state';
import { Sidebar } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/game/stages/home/home.component';
import { AppRouting } from './app-routing.module';
import { GameComponent } from './pages/game/game.component';
import { StatsComponent } from './pages/stats/stats.component';
import { FirebaseService } from './services/firebase';
import { ScanPlayersComponent } from './pages/game/stages/scan-players/scan-players.component';
import { RoundComponent } from './pages/game/stages/round/round.component';
import { PlayerNamesComponent } from './pages/game/stages/player-names/player-names.component';
import { MoneyStatusComponent } from './pages/game/stages/money-status/money-status.component';
import { GameEndComponent } from './pages/game/stages/game-end/game-end.component';
import { ScanningComponent } from './pages/game/stages/scanninng/scanning.component';
import { RoundStartingComponent } from './pages/game/stages/round-starting/round-starting.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScanPlayersComponent,
    ScanningComponent,
    RoundStartingComponent,
    RoundComponent,
    PlayerNamesComponent,
    MoneyStatusComponent,
    GameEndComponent,
    GameComponent,
    StatsComponent,
    Navbar,
    Sidebar
  ],
  imports: [
    AppRouting,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [StateService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
