import { Component } from '@angular/core';
//import modul dialog
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
//import halaman dialog yang sudah dibuat pada tahap sebelumnya
import { TambahBukuComponent } from '../tambah-buku/tambah-buku.component';
import { RinciBukuComponent } from '../rinci-buku/rinci-buku.component';
import { KonfirmasiComponent } from '../konfirmasi/konfirmasi.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( 
  public dialog:MatDialog, //menambahkan variabel dialog
  public api:ApiService
  )
  {
  	this.getData();
  }
  	
  dataBuku:any=[]
  getData()
  {
  		this.api.baca().subscribe(res=>{
  			this.dataBuku=res;
  		})
  }

  //fungsi untuk menampilkan dialog penambahan alamat baru

  buatBuku()
  {
  		const dialogRef = this.dialog.open(TambahBukuComponent, {
  		width: '450px',
  		data:null
  		});
  		dialogRef.afterClosed().subscribe(result => {
  		this.getData();
  		});
  }

  detailBuku(item)
  {
  		const dialogRef = this.dialog.open(RinciBukuComponent, {
  		width: '450px',
  		data:item
  		});
  		dialogRef.afterClosed().subscribe(result => {
  		console.log('The dialog was closed');
  		});
  }

  konfirmasiHapus(id)
  {
  		const dialogRef = this.dialog.open(KonfirmasiComponent, {
  		width: '450px',
  		});
  		dialogRef.afterClosed().subscribe(result => {
  		if(result == true)
  		{
  			console.log('Menghapus data');
  			this.api.hapus(id).subscribe(res=>{
  				this.getData();
  			})
  		}
  		});
  }

  editBuku(data)
  {
  	const dialogRef = this.dialog.open(TambahBukuComponent, {
  	width: '450px',
  	data:data
  	});
  	dialogRef.afterClosed().subscribe(result => {
  	this.getData();
  	});
  }
  title = 'Tempat-Buku';
}
