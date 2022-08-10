package com.learn2code.ecommerce.dao;

import com.learn2code.ecommerce.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

// Product from Entity, Long from Primary Key
public interface ProductRepository extends JpaRepository<Product, Long> {
}
