import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() message: Message;

  constructor(private http: HttpClient) { }
  runHttp(){
    this.http.get('https://wunder-provider.herokuapp.com/').subscribe(data=>{console.log(data);
    });
  }
  ngOnInit() {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }
}
