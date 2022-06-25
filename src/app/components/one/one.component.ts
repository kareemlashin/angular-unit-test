import { Component, OnInit } from '@angular/core';
import { OneService } from '../../services/one.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  data(val:any){
    return val
  }
}
