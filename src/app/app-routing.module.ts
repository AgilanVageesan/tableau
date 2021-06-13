import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { ChartComponent } from "./components/chart/chart.component";
import { HomeComponent } from "./components/home/home.component";
import { TableauComponent } from "./components/tableau/tableau.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "chart", component: ChartComponent },
  { path: "covid", component: TableauComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
