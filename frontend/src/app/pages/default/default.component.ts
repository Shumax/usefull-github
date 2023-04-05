import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { GithubService } from './../../services/github.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  breakpoint: number = 3;

  users!: any
  loading!: boolean

  pg: number = 0
  limit: number = 12

  constructor(
    private githubService: GithubService, 
    private userService: UserService,
    private router: Router
  ) {
    if(window.screen.width < 780) this.breakpoint = 1
  }

  ngOnInit(): void {
    this.list()
  }

  list() {
    this.githubService.allUsers(this.pg, this.limit).subscribe(res => {
      this.users = res
      this.loading = true
    })
  }

  handleUserDetail(user: any): void {
    this.githubService.details(user.login).subscribe(res => {
      this.userService.setValueUser(res)
    })

    this.githubService.repositories(user.login,0,10).subscribe(res => {
      this.userService.setValueRepos(res)
      this.router.navigate(['info'])
    })
  }

  handlePageEvent(e: PageEvent) {
    this.pg = e.pageIndex
    this.list()
    console.log(e)
  }

}
