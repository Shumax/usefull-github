import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../services/github.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  users!: any

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.allUsers().subscribe(res => {
      this.users = res
    })
  }

}
