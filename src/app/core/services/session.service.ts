import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private loggedIn = true;
  private userName = 'guest';
  private userEmail = 'guest@guest.com';

  setLoggedIn(loggedIn: boolean) {
    this.loggedIn = loggedIn;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setUserName(userName: string) {
    this.userName = userName;
  }

  getUserName(): string {
    return this.userName;
  }

  setUserEmail(userEmail: string) {
    this.userEmail = userEmail;
  }

  getUserEmail(): string {
    return this.userEmail;
  }
  /*constructor(private http: HttpClient) {
    this.http.get('http://localhost:8080/api/user/login').subscribe(res => {
      this.loggedIn = true;
      this.userName = res.userName;
      this.userEmail = res.userEmail;
    });
  }

  logout() {
    this.loggedIn = false;
    this.userName = '';
    this.userEmail = '';
  }*/
}
