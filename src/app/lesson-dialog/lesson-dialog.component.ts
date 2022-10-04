import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Lesson} from '../model/lesson';
import {Course} from '../model/course';

@Component({
  selector: 'lesson-dialog',
  templateUrl: './lesson-dialog.component.html',
  styleUrls: ['./lesson-dialog.component.scss']
})
export class LessonDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private course: Course, private dialogRef: MatDialogRef<LessonDialogComponent>) {
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close()
  }

  openDialog(dialog: MatDialog, lesson: Lesson) {
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;

    config.data = {...lesson};
    const dialogRef = dialog.open(LessonDialogComponent, config);
    return dialogRef.afterClosed();
  }
}
