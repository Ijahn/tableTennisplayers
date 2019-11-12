import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { GeneralMenComponent } from './general-men/general-men.component';
import { GeneralWomenComponent } from './general-women/general-women.component';
import { MensTeamComponent } from './mens-team/mens-team.component';
import { WomensTeamComponent } from './womens-team/womens-team.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MensPlayerBioComponent } from './mens-player-bio/mens-player-bio.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
// import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    GeneralMenComponent,
    GeneralWomenComponent,
    MensTeamComponent,
    WomensTeamComponent,
    MensPlayerBioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule
    // MatDialog
  ],
  entryComponents: [
    MensPlayerBioComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
