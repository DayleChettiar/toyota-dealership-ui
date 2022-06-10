import { Component, OnInit } from '@angular/core';
import { ToyotaDealershipService} from '../../services/toyota-dealership.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public cars; 

  constructor(private toyotaDealershipService: ToyotaDealershipService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.toyotaDealershipService.getCars().subscribe(
      data => { this.cars = data },
      err => console.error(err),
      () => console.log('cars loaded')
    );
  } 

}
