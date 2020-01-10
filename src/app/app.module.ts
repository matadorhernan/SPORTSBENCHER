import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { SignUpComponent } from "./auth/sign-up/sign-up.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { AuthComponent } from "./auth/auth.component";
import { ResetComponent } from "./auth/reset/reset.component";
import { SidenavComponent } from "./shared/sidenav/sidenav.component";
import { TeamsComponent } from "./teams/teams.component";
import { PlayersComponent } from "./players/players.component";
import { FilterBarComponent } from "./shared/components/filter-bar/filter-bar.component";
import { FeaturedComponent } from "./shared/components/featured/featured.component";
import { ListItemComponent } from "./shared/components/list-item/list-item.component";
import { GridItemComponent } from "./shared/components/grid-item/grid-item.component";
import { TournamentsComponent } from "./tournaments/tournaments.component";
import { TournamentComponent } from './tournaments/tournament/tournament.component';
import { FeaturedManComponent } from './shared/components/featured/featured-man/featured-man.component';
import { FeaturedWomanComponent } from './shared/components/featured/featured-woman/featured-woman.component';
import { FeaturedAllComponent } from './shared/components/featured/featured-all/featured-all.component';
import { FeaturedDetailsComponent } from './shared/components/featured/featured-details/featured-details.component';
import { NotificationItemComponent } from './shared/navbar/notification-item/notification-item.component';
import { FromNowPipe } from './pipes/from-now.pipe';

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
    TeamsComponent,
    PlayersComponent,
    FilterBarComponent,
    FeaturedComponent,
    ListItemComponent,
    GridItemComponent,
    TournamentComponent,
    FeaturedManComponent,
    FeaturedWomanComponent,
    FeaturedAllComponent,
    FeaturedDetailsComponent,
    NotificationItemComponent,
    FromNowPipe
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
