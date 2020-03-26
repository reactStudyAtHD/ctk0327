package com.ctk0327.reactstudy.sales.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ctk0327.reactstudy.sales.entity.SalesEntity;

public interface SalesRepository extends JpaRepository<SalesEntity,Integer> {
    List<SalesEntity> findBySaleYear(Integer saleYear);
    List<SalesEntity> findBySaleMonth(Integer saleMonth);
    List<SalesEntity> findBySaleYearAndSaleMonth(Integer saleYear,Integer saleMonth);
}
