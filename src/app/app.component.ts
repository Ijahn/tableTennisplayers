import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tableTennisPlayers';

  // constructor(public dialog: MatDialog) {
  // }

  // openDialog() {
  //   this.dialog.open( {
  //     data: {
  //       animal: 'panda'
  //     }
  //   });
  // }
}
