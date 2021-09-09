import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User();

  submitted = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.addUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.usersList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }


  usersList() {
    this.router.navigate(['users']);
  }

}
