import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrl: './get-all-customers.component.scss'
})
export class GetAllCustomersComponent {

  constructor( private service : CustomerService){
  }

  customers : any = []

  ngOnInit(){
    this.getAllCustomers();
  }

  getAllCustomers(){
  this.service.getAllCustomers().subscribe((resp)=>{
    console.log(resp)
    this.customers = resp;
  })
}

deleteCustomer(id: number){
  console.log(id);
  this.service.deleteCustomer(id).subscribe((resp)=>{
    console.log(resp);
    this.getAllCustomers();
  })
}

}