import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { Navbar } from './components/navbar/navbar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

import { StateService } from './services/state';
import { Sidebar } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/game/stages/home/home.component';
import { AppRouting } from './app-routing.module';
import { GameComponent } from './pages/game/game.component';
import { StatsComponent } from './pages/stats/stats.component';
import { FirebaseService } from './services/firebase';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    StatsComponent,
    Navbar,
    Sidebar
  ],
  imports: [
    AppRouting,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [StateService, FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
