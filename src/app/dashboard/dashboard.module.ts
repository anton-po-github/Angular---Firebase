import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  imports: [
    DashboardRoutingModule,
    AngularFireDatabaseModule,
    ChartsModule,
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
