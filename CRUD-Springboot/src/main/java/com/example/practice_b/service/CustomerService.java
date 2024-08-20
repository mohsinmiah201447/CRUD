package com.example.practice_b.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.practice_b.entity.Customer;
import com.example.practice_b.repository.CustomerRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public Customer postCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    public List<Customer> getAllCustomer(){
        return customerRepository.findAll();
    }

    public void deleteCustomer(Long id){
        customerRepository.deleteById(id);
    }

    public Customer getCustomerById(Long id){
       return customerRepository.findById(id).orElse(null);
    }

    public Customer updatCustomer(Long id, Customer customer){
        Optional<Customer> optionalCustomer = customerRepository.findById(id);
        if(optionalCustomer.isPresent()){
            Customer existingCustomer = optionalCustomer.get();
            existingCustomer.setEmail(customer.getEmail());
            existingCustomer.setName(customer.getName());
            existingCustomer.setPhone(customer.getPhone());
            existingCustomer.setDay(customer.getDay());
            existingCustomer.setTime(customer.getTime());
            return customerRepository.save(existingCustomer);
        }
        return null;
    }

}
