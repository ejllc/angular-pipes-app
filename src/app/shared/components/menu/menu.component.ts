import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit{
  
  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {label: 'Nuevo', icon: 'pi pi-fw pi-plus'},
      {label: 'Abrir', icon: 'pi pi-fw pi-download'},
      {label: 'Deshacer', icon: 'pi pi-fw pi-refresh'}
    ]
  }

}
