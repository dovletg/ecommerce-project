package com.learn2code.ecommerce.dao;

import com.learn2code.ecommerce.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200") //accept calls from web browser scripts for this origin
// Product from Entity, Long from Primary Key
public interface ProductRepository extends JpaRepository<Product, Long> {

    Page<Product> findByCategoryId(@Param("id") Long id, Pageable pageable); //Query method findBy Match by category id
} //Spring will execute aquery SELECT*FROM product where category_id=?
