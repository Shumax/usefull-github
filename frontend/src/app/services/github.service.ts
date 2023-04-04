import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseURL: string = environment.url

  constructor(private http: HttpClient) { }

  allUsers(since: number = 0) {
    return this.http.get(`${this.baseURL}/api/users?since=${since}`)
  }

  details(username: string) {
    return this.http.get(`${this.baseURL}/api/users/${username}/details`)
  }

  repositories(username: string, pg: number, limit: number) {
    return this.http.get(`${this.baseURL}/api/users/${username}/repos?pg=${pg}&limit=${limit}`)
  }

}
