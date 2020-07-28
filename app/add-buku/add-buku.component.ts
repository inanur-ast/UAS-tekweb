import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-buku',
  templateUrl: './add-buku.component.html',
  styleUrls: ['./add-buku.component.css']
})
export class AddBukuComponent implements OnInit {
  data:any={};
  constructor(
  public api:ApiService, 
  public dialogRef:MatDialogRef<AddBukuComponent>,
  @Inject(MAT_DIALOG_DATA) public itemData:any
  ) 
  {
  	if(itemData != null)
  	{
  		this.data=itemData;
  	}
  }
  
  ngOnInit() {}
  simpan(data)
  {
  	if(data.id == undefined)
  	{
  	this.api.simpan(data).subscribe(res=>{
  		this.dialogRef.close(true);
  	});
  }else{
  	this.api.ubah(data).subscribe(res=>{
  		this.dialogRef.close(true);
  	})
  }
  
  }
}
