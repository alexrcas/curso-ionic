import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Registro } from 'src/app/models/registro.model';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  private registro: Registro;

  constructor(private barcodeScanner: BarcodeScanner,
              private dataLocalService: DataLocalService) {}


  async ngOnInit() {
  }


  async ionViewWillEnter() {
    await this.leer();
  }

  async leer() {
    try {
      let barcodeData = await this.barcodeScanner.scan();
      if(!barcodeData.cancelled)
        this.dataLocalService.guardarRegistro(barcodeData.format, barcodeData.text);
    } catch(e) {
        throw(e);
      }
  }


}
