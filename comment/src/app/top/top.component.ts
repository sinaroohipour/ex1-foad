import { Component, ViewChild, ElementRef, Output, OnInit } from '@angular/core';
import { IComment } from '../comment';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})

export class TopComponent implements OnInit {
  comments: IComment[] = [];

  @ViewChild('nameInputField', { static: true }) IName: ElementRef;
  @ViewChild('familyInputField', { static: true }) IFamily: ElementRef;
  @ViewChild('commentInputField', { static: true }) IComm: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  addComment() {
    let i: IComment = {
      name: this.IName.nativeElement.value,
      family: this.IFamily.nativeElement.value,
      comment: this.IComm.nativeElement.value,
      like: 0,
      dislike: 0,
    }
    this.comments.push(i);
  }

}
