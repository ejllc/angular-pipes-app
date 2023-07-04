import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select

  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Merlisa';
    this.gender = 'female';
  }

  // i18n Plural

  public clients: string[] = ['Maria', 'Pedro', 'Ramón', 'Fernando', 'Luis', 'Melisa'];
  public clientsMap = {
    '=0': 'no tenemos ningín cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(): void {
    this.clients.pop();
  }

  // KeyValue Pipe

  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }

  // Async Pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tab:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500)

  })





}
