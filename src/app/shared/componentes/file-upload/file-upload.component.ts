import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styles: [`
  p{
    color:white;
}
.dropzone{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: 200;
    height: 300px;
    border: 2px dashed #f16624;
    border-radius: 5px;
    background: white;
    margin: 10px 0;
}
progress::-webkit-progress-value{
    transition: width 0.1s ease;
}
img{
    width: 250px;
}
.flex-container {
    padding: 0;
    margin: 0;
    list-style: none;
    border: 1px solid silver;
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
  }
    
  .modo-wrap { 
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }  
  .modo-wrap li {
    background: #93b2c9;
    position: relative;
  }
  
  .flex-item {
    width: 75px;
    height: 75px;
    margin: 10px;
    text-align: center;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px
  }
  .img-footer{
    width: 75px;
    height: 75px;
  }
  `]
})
export class FileUploadComponent implements OnInit {

  @Input('path') public ubicacion: string = '';
  @Input('obj1') public producto: any = {}
  @Output() obj: EventEmitter<any> = new EventEmitter();
  private _forma : FormGroup;
  public get forma() : FormGroup {
    return this._forma;
  }

  @Input() public set forma(v : FormGroup) {
    this._forma = v;
  }
  

  task: AngularFireUploadTask;
  porcentaje: Observable<number>;
  snapshot: Observable<any>;
  productos: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;
  arrayDownload: any = [];


  constructor(private storage: AngularFireStorage) {}

  protected ngOnChanges(){
    this._forma.valueChanges.subscribe(elem => {
      this.arrayDownload = elem.imagenes || []; 
    })

  }

  toggleHover(event: boolean) {
    this.isHovering = event
  }
  startUpload(event: FileList) {
    // const file = event.item(0);
    const files = event;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.split('/')[0] !== 'image') {
        console.error('unsupported file type :( ');
        return;
      }
      const path = `${this.ubicacion}/${new Date().getTime()}_${file.name}`;
      const customMetadata = { app: 'My AngularFire-powered PWA!' };
      const fileRef = this.storage.ref(path);
      this.task = this.storage.upload(path, file, { customMetadata })
      this.task.then(res => {
        this.porcentaje = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges().pipe(
          finalize(async () => {
            fileRef.getDownloadURL().toPromise().then(url => {
              this.arrayDownload.push(url);
              this.producto.imagenes = this.arrayDownload;
              this.obj.emit(this.producto);
              this.forma.patchValue({imagenes:this.arrayDownload})
            });
            return this.downloadURL = fileRef.getDownloadURL()
          })
        );
      });

    }

  }

  isActive(snapshot) {
    return snapshot === 'running' && snapshot.bytesTansferred < snapshot.totalBytes;
  }

  ngOnInit() {
    this.arrayDownload = this.forma.value.imagenes || [];
  }

}
