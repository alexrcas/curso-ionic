import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = []

  constructor(private storage: Storage) {
    this.cargarFavoritos();
  }

  guardarNoticia(noticia: Article) {
    const existe = this.noticias.find(not => not.url === noticia.url)
    if (!existe) {
      this.noticias.unshift(noticia);
      this.storage.set('favoritos', this.noticias);
    }
    
  }


  borrarNoticia(noticia: Article) {
    this.noticias = this.noticias.filter(not => not.url != noticia.url);
  }


  async cargarFavoritos() {

    const favoritos: Article[] = await this.storage.get('favoritos');
    if (favoritos) {
      this.noticias = favoritos;
    }

  }
}
