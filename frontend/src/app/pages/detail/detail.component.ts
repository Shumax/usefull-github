import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  
  $user!: any

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getValueUser().subscribe(data => {
      this.$user = data
      console.log(data)

      // setTimeout(() => {
      //   if(!Object.keys(data).length) this.router.navigate([''])
      // }, 5000)
      if(!Object.keys(data).length) this.router.navigate([''])
    })
  }


  formatDate(date: string): string {
    return new Date(date).toDateString()
  }
}
