import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Object;

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {}

  getData() {
    this.apiService.getCurrentLocation().subscribe(data => {
      this.data = JSON.stringify(data);
    });
  }

}
