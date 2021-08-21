import { Component } from '@angular/core';
import { Registro } from 'src/app/models/registro.model';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public dataLocalService: DataLocalService) {}


  abrirRegistro(registro: Registro) {
    this.dataLocalService.abrirRegistro(registro)
  }

  limpiarHistorial() {
    this.dataLocalService.limpiarRegistro();
  }

  enviarCorreo() {
    this.dataLocalService.enviarCorreo();
  }
}
