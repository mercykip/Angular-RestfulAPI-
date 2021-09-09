import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];
  id!: number;
  user: User = new User();
  email!: String; //search
  isLoading = true;
  color = 'primary';
  mode = 'determinate';
  value = 50;
  displayedColumns = ['name', 'email', 'occupation', 'action', 'actionu', 'actiond'];

  constructor(private userService: UserService, private router: Router,) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
      this.isLoading = false;
    })
  }

  userDetails(id: number) {
    this.router.navigate(['user', id]);
    console.log(id);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).
      subscribe(data => {
        console.log(data);
        this.ngOnInit();
      },
        error => console.log(error));
  }

  editUser(id: number) {
    this.router.navigate(['update', id]);
    console.log(id);
  }

  addUser() {
    this.router.navigate(['add']);
  }

  search() {
    this.isLoading = true;
    this.users = this.users.filter(res => {
      if (!this.users || !this.email) {
        this.userService.getUsers().subscribe(data => {
          this.users = data;
          console.log(data);
        })
      }
      else {
        (error: any) => console.log(error);
      }
      return res.email.toLocaleLowerCase().match(this.email.toLocaleLowerCase());
    })
  }



}
