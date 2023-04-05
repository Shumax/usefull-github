import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: BehaviorSubject<any> = new BehaviorSubject<any>({})

  constructor() { }

  getValueUser(): Observable<any> { return this.user.asObservable() }

  setValueUser(value: any): void { this.user.next(value) }

}
