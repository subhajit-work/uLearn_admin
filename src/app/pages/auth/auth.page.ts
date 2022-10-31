import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  hide = true;
  constructor(
    public menuCtrl: MenuController,
  ) { }

  ngOnInit() {
    
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
