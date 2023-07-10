import { Component } from '@angular/core';
import  {MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private exportTime = {hour: 7, minute: 15, meriden: 'PM', format: 12};

  private exportTime24 = {hour: 7, minute: 15, meriden: 'PM', format: 24};

  constructor(public snackBar: MatSnackBar) {}

  public onRevert() {
    this.exportTime = {hour: 7, minute: 15, meriden: 'PM', format: 12};
    this.exportTime24 = {hour: 7, minute: 15, meriden: 'PM', format: 24};
    this.snackBar.open(`Revert time to ${this.exportTime.hour}:${this.exportTime.minute} ${this.exportTime.meriden}`, null, {
      duration: 500,
    });
  }

  public onSubmit(time) {
    this.snackBar.open(`Saved time ${this.exportTime.hour}:${this.exportTime.minute} ${this.exportTime.meriden}`, null, {
      duration: 500,
    });
  }
}
