import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-main',
  templateUrl: './menu-main.component.html',
  styleUrl: './menu-main.component.scss'
})
export class MenuMainComponent implements OnInit{

  ngOnInit(): void {
    
  }

  pages = [
    {path: 'pages/home', name: 'Chats'}
  ];
}
