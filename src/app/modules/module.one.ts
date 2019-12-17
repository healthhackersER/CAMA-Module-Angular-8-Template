import { Component, OnInit} from '@angular/core';
import {Entity} from '../models/entity';

@Component({
  selector: 'module-one',
  templateUrl: './module.one.html',
  styleUrls: ['./module.one.scss']
})

export class ModuleOne implements OnInit {
  list: Array<Entity> = new Array<Entity>();
  name: String = "Module One"
  constructor() {
    this.list = new Array<Entity>();
  }
  ngOnInit() {
  }
}


