import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-rinci-buku',
  templateUrl: './rinci-buku.component.html',
  styleUrls: ['./rinci-buku.component.css']
})
export class RinciBukuComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<RinciBukuComponent>,
  	@Inject(MAT_DIALOG_DATA) public data :any
  ) { }

  ngOnInit(): void {
  }

}
