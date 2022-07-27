import { Component, OnInit, Inject } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Candidato } from 'src/app/models/candidado';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  element!: Candidato;

  constructor(
    @Inject(MAT_DIALOG_DATA)
     public data: Candidato,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {this.element=data}

  ngOnInit(): void {}

  onCancel():void {
    this.dialogRef.close();
  }

  onSelect(args:MatDatepickerInputEvent<string>){
    if(args.value) this.data.dataRegistro=args.value;
  }
}
