import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TournamentsComponent } from "./tournaments/tournaments.component";
import { TeamsComponent } from "./teams/teams.component";
import { PlayersComponent } from "./players/players.component";
import { TournamentComponent } from "./tournaments/tournament/tournament.component";

const routes: Routes = [
  {
    path: "tournaments",
    component: TournamentsComponent
  },
  {
    path: "tournaments/:id",
    component: TournamentComponent
  },
  {
    path: "teams",
    component: TeamsComponent
  },
  {
    path: "players",
    component: PlayersComponent
  },
  { path: "", redirectTo: "tournaments", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
