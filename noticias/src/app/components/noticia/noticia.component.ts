import { Component, Input, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActionSheetController, ToastController } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() enFavoritos;

  constructor(
    private browser: InAppBrowser,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private datalocalService: DataLocalService,
    private toastController: ToastController) { }

  ngOnInit() {}


  abrirNoticia() {
    this.browser.create(this.noticia.url, '_system');
  }


  async lanzarMenu() {

    let guardarBorrarBtn;
    if (this.enFavoritos) {
      guardarBorrarBtn = {
        text: 'Borrar',
        icon: 'trash',
        handler: () => {
          this.datalocalService.borrarNoticia(this.noticia)
          console.log('borrar')
        }
      }
    } else {
      guardarBorrarBtn = {
        text: 'Favorito',
        icon: 'heart',
        handler: async () => {
          this.datalocalService.guardarNoticia(this.noticia)
          const toast = await this.toastController.create({
            message: 'Añadido a favoritos',
            duration: 2000
          });
          toast.present();
        }
      }
    }

    const actionSheet = await this.actionSheetCtrl.create( {
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          this.socialSharing.share(this.noticia.title, this.noticia.source.name, '', this.noticia.url);
        }
      },
      guardarBorrarBtn,
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          actionSheet.dismiss();
        }
      }
    ]
    });
    await actionSheet.present();
  }

}
