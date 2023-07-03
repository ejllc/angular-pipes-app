import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'emiliano';
  public nameUpper: string = 'EMILINAO';
  public fullName: string = 'EmiLiAno LloRenTe';

  public customDate: Date = new Date();

}
