import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { ResetComponent } from './auth/reset/reset.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { FeaturedTournamentsComponent } from './tournaments/featured-tournaments/featured-tournaments.component';
import { TournamentsTableComponent } from './tournaments/tournaments-table/tournaments-table.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';
import { TournamentsGridComponent } from './tournaments/tournaments-grid/tournaments-grid.component';
import { FeaturedTeamsComponent } from './teams/featured-teams/featured-teams.component';
import { TournamentComponent } from './tournaments/tournament/tournament.component';
import { TeamsGridComponent } from './teams/teams-grid/teams-grid.component';
import { TeamsTableComponent } from './teams/teams-table/teams-table.component';
import { TeamComponent } from './teams/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    FooterComponent,
    AuthComponent,
    ResetComponent,
    SidenavComponent,
    TournamentsComponent,
    FeaturedTournamentsComponent,
    TournamentsTableComponent,
    TeamsComponent,
    PlayersComponent,
    TournamentsGridComponent,
    FeaturedTeamsComponent,
    TournamentComponent,
    TeamsGridComponent,
    TeamsTableComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
