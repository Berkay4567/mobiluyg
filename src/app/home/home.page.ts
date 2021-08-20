import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService,private http: HttpClient) {}
runHttp(){
  this.http.get('wss://wunder-provider.herokuapp.com').subscribe(data=>{console.log(data);
  });
}
  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
