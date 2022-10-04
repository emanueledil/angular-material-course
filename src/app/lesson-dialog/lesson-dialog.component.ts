import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {Lesson} from '../model/lesson';

@Component({
  selector: 'lesson-dialog',
  templateUrl: './lesson-dialog.component.html',
  styleUrls: ['./lesson-dialog.component.scss']
})
export class LessonDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) private lesson: Lesson, private dialogRef: MatDialogRef<LessonDialogComponent>) {
  }

  public lessonDetail: Lesson = this.lesson;


  close() {
    this.dialogRef.close();
  }


}

export function openLessonDialog(dialog: MatDialog, lesson: Lesson) {
  const config = new MatDialogConfig();
  config.disableClose = true;
  config.autoFocus = true;

  config.data = {...lesson};
  const dialogRef = dialog.open(LessonDialogComponent, config);
  return dialogRef.afterClosed();
}
