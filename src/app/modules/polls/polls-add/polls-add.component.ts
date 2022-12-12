import { Component, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-polls-add',
  templateUrl: './polls-add.component.html',
  styleUrls: ['./polls-add.component.scss']
})
export class PollsAddComponent implements OnInit {

  constructor(private dialog: MatDialog,
    @Optional() private dialogRef: MatDialogRef<PollsAddComponent>,
    ) { }

  ngOnInit() { }

  onClose(){
    this.dialogRef.close();
  }

}
