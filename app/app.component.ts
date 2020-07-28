import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TambahBukuComponent} from './tambah-buku/tambah-buku.component';
import { RinciBukuComponent } from './rinci-buku/rinci-buku.component';
import { KonfirmasiComponent } from './konfirmasi/konfirmasi.component';
import {ApiService} from './api.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(
		public dialog:MatDialog,
    	public api:ApiService
	) 
	{
	this.getData(); //kode tambahan
	  } 
		//mengambil data pada server (kode tambahan)
		dataBuku:any=[];
  		getData()
  		{
    		this.api.baca().subscribe(res=>{
      		this.dataBuku=res;
    	})
	}
		
	buatBuku()
  {
		const dialogRef = this.dialog.open(TambahBukuComponent, {
			width: '450px',      
		});
		dialogRef.afterClosed().subscribe(result => {
			console.log('Dialog ditutup');     
		});
	}
	rinciBuku()
	{
	  const dialogRef = this.dialog.open(RinciBukuComponent, {
		width: '450px',      
	  });	
	  dialogRef.afterClosed().subscribe(result => {
		console.log('The dialog was closed');     
	  });
	}
	konfirmasiHapus()
 {
		const dialogRef = this.dialog.open(KonfirmasiComponent, {
			width: '450px',      
		});
		dialogRef.afterClosed().subscribe(result => {
			if(result == true)
			{
				console.log('Menghapus data');
			}
		});
	}

	ngOnInit(): void {
	}
	title = 'Tempat-Buku';
}
