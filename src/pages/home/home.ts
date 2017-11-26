import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nickname: string = '';
  constructor(public navCtrl: NavController, private socket: Socket) { 
    
  }
 
  joinChannel() {
    this.socket.connect();
    this.socket.emit('set-nickname', this.nickname);
    this.navCtrl.push('ChannelPage', { nickname: this.nickname });
  }
}