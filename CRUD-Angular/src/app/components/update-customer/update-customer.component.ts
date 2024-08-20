import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {} from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.scss'
})
export class UpdateCustomerComponent {
  
  updateCustomerForm!: FormGroup;
  id:number = this.activatedRoute.snapshot.params['id'];

constructor(private activatedRoute: ActivatedRoute,
  private service: CustomerService,
  private fb: FormBuilder,
  private router : Router
){}



ngOnInit(){
  this.updateCustomerForm = this.fb.group({
    name : [null, Validators.required ],
    email :[null, Validators.required],
    phone: [null, Validators.required]
  })
  this.getCustomerById();
}

getCustomerById(){
  this.service.getCustomerById(this.id).subscribe((resp)=>{
    console.log(resp);
    this.updateCustomerForm.patchValue(resp);
  })
}

updateCustomer(){
  this.service.updateCustomer(this.id, this.updateCustomerForm.value).subscribe((resp)=>{
    console.log(resp);
    this.router.navigateByUrl("");
  })
}

}
