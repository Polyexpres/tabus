import { Component, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-polls-edit',
  templateUrl: './polls-edit.component.html',
  styleUrls: ['./polls-edit.component.scss']
})
export class PollsEditComponent implements OnInit {

  constructor(private dialog: MatDialog,
    @Optional() private dialogRef: MatDialogRef<PollsEditComponent>,
    ) { }

  ngOnInit() { }

  onClose(){
    this.dialogRef.close();
  }

}
