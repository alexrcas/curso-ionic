import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;

  categorias: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sport', 'technology'];
  seleccion: string = this.categorias[0];
  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) {}


  ngOnInit(): void {
    this.cargarNoticias(this.seleccion);
  }


  cambioCategoria(event) {
    this.noticias = [];
    this.cargarNoticias(event.detail.value);
  }


  cargarNoticias(categoria: string, event?) {
    this.noticiasService.getTopHeadLinesByCategoria(categoria, 've').subscribe(response => {
      if (response.articles.length === 0) {
        event.target.disabled = true;
        return;
      }
      this.noticias.push(...response.articles)
      if(event) {
        event.target.complete();
      }
    })
  }


  loadData(event) {
    this.cargarNoticias(this.seleccion, event);
  }


}
