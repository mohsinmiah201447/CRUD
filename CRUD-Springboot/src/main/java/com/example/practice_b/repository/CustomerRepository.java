package com.example.practice_b.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.practice_b.entity.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
