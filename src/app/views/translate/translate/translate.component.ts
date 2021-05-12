import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss'],
})
export class TranslateComponent implements OnInit {
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
}
