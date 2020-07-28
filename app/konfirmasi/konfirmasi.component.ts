import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-konfirmasi',
  templateUrl: './konfirmasi.component.html',
  styleUrls: ['./konfirmasi.component.css']
})
export class KonfirmasiComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<KonfirmasiComponent>
  ) { }

  ngOnInit(): void {
  }

  konfirmasi()
  {
    	this.dialogRef.close(true);
  }

}
