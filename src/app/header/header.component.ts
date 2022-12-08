import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() selectedLink = new EventEmitter<string>();
  collapsed = true;

  // onSelect(linkType: string){
  //   if(linkType === 'recipes'){
  //     this.selectedLink.emit('recipes')
  //   }else{
  //       this.selectedLink.emit('shopping-list')
  //   }
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
