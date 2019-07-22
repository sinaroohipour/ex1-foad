import { Component, ViewChild, ElementRef, Output, OnInit } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})

export class TopComponent implements OnInit {
  counter: number;
  name: string;
  family: string;
  constructor() { }

  ngOnInit(){
    
  }
  


}
