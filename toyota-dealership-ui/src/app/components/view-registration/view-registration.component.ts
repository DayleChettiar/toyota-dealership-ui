import { Component, OnInit } from '@angular/core';
import { ToyotaDealershipService} from '../../services/toyota-dealership.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  public carReg;

  constructor(private toyotaDealershipService: ToyotaDealershipService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.carReg(this.route.snapshot.params['id']);
  }

  getCarReg(id: number) {
    this.toyotaDealershipService.getCar(id).subscribe(
      data => { this.carReg = data },
      err => console.error(err),
      () => console.log('cars loaded')
    );
  } 

}
