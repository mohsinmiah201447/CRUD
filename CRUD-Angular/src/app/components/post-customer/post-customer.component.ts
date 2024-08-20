import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-customer',
  templateUrl: './post-customer.component.html',
  styleUrl: './post-customer.component.scss'
})
export class PostCustomerComponent {
//     console.log(resp);
//   })
// }
postCustomerForm!: FormGroup 



  constructor(private CustomerService : CustomerService,
    private fb: FormBuilder, 
    private router: Router){}

  ngOnInit(){
    this.postCustomerForm = this.fb.group({
      name : [null, Validators.required ],
      email :[null, Validators.required],
      phone: [null, Validators.required]
    })
  }

  postCustomer(){
    this.CustomerService.postCustomer(this.postCustomerForm.value).subscribe((resp)=>{
      console.log(resp);
      this.router.navigateByUrl('');
    })
  }

}
