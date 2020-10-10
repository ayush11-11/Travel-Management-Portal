import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AdminTicketService {

  constructor() { }
  form: FormGroup = new FormGroup({
    ticketId: new FormControl(''),
    typeRequest: new FormControl(''),
    priority: new FormControl(''),
    cityTravelTo: new FormControl(''),
    cityTravelFrom: new FormControl(''),
    endtDate: new FormControl(''),
    startDate: new FormControl(''),
    passport: new FormControl(),
    projectName: new FormControl(''),
    travelApproverBy: new FormControl(''),
    expectedDuration: new FormControl(''),
    upperBond: new FormControl(null),
    expenseBorne: new FormControl(''),
    additionalDetails: new FormControl(''),
    status:new FormControl('')
  });
  populateForm(ticket) {
    this.form.setValue((ticket));
    this.form.disable();
  }

}
