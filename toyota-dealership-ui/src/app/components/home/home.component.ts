import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { ToyotaDealershipService} from '../../services/toyota-dealership.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  models: string[] = [
    '2018 Rav 4 LE Gen4',
    '2018 Camry XLE Gen8',
    '2019 Corolla LE Gen12',
    '2021 Rav 4 LE Gen5',
    '2020 Corolla LE Gen12'
  ];

  carForm!: FormGroup;
  validMessage: string = "";

  constructor(private toyotaDealershipService: ToyotaDealershipService) { }

  ngOnInit(): void {
    this.carForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      vinNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitRegistration() {
    if(this.carForm.valid) {
      this.validMessage = "Your bike registration has been submitted. Thank you!";
      this.toyotaDealershipService.createCarRegistration(this.carForm.value).subscribe(
        data => {
          this.carForm.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting";
    }
  }

}
