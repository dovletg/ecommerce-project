package com.learn2code.ecommerce.dao;

import com.learn2code.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200") //accept calls from web browser scripts for this origin
// Product from Entity, Long from Primary Key
public interface ProductRepository extends JpaRepository<Product, Long> {
}
