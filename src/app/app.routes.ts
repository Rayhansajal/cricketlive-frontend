import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { LiveComponent } from './pages/live/live.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent,
        title: "Home | CricketLive"
    },
    {
        path:"history",
        component:HistoryComponent,
        title: "MatchHistory | CricketLive"
    },
    {
        path:"live",
        component:LiveComponent,
        title: "Live Matches | CricketLive"
    },
    {
        path:"point-table",
        component:PointTableComponent,
        title: "Point Table | CricketLive"
    }
];
