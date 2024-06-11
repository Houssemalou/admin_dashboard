import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent {
  fullName = 'User';  // Example value, replace with your actual data source

  constructor(private router: Router) {}

  isActive(route: string): boolean {
    return this.router.url === route;
  }


}
