package com.ctk0327.reactstudy.sales.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ctk0327.reactstudy.common.Config.Swagger2Config;
import com.ctk0327.reactstudy.sales.entity.SalesEntity;
import com.ctk0327.reactstudy.sales.repository.SalesRepository;

import io.swagger.annotations.Api;

@RestController
//@CrossOrigin(origins = { "*" })
@Api(tags = { Swagger2Config.TAG_1 })
public class SalesController {
    @Autowired
    private SalesRepository salesRepository;

    @RequestMapping(value = "/sales", method = RequestMethod.GET)
    public ResponseEntity<List<SalesEntity>> getSales(
            @RequestParam(value = "saleYear", required = false) Integer saleYear,
            @RequestParam(value = "saleMonth", required = false)
                    Integer saleMonth) {
        List<SalesEntity> salesEntities = null;
        try {
            if (saleMonth == null && saleYear == null) {
                salesEntities = salesRepository.findAll();
                throw new NullPointerException();
            } else if (saleYear == null) {
                salesEntities = salesRepository.findBySaleMonth(saleMonth);
            } else if (saleMonth == null) {
                salesEntities = salesRepository.findBySaleYear(saleYear);
            } else {
                salesEntities = salesRepository.findBySaleYearAndSaleMonth(saleYear, saleMonth);
            }
        }catch (Exception e){
            e.printStackTrace();
            throw e;
        }

        return new ResponseEntity<>(salesEntities, HttpStatus.OK);
    }

    @RequestMapping(value = "/sale", method = RequestMethod.POST)
    public ResponseEntity<SalesEntity> saveSale(@RequestBody SalesEntity salesEntity) {
        SalesEntity savedSalesEntity=null;
        HttpStatus httpStatus=null;
        try {
            savedSalesEntity = salesRepository.save(salesEntity);
            httpStatus =
                    savedSalesEntity == null ? HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.CREATED;
        }catch (Exception e){
            e.getStackTrace();
            throw e;
        }
        return new ResponseEntity<>(savedSalesEntity, httpStatus);
    }

    @RequestMapping(value = "/sales", method = RequestMethod.POST)
    public ResponseEntity<List<SalesEntity>> saveSales(@RequestBody List<SalesEntity> salesEntities) {
        List<SalesEntity> savedSalesEntities = null;
        HttpStatus httpStatus = null;

        try {
            savedSalesEntities = salesRepository.saveAll(salesEntities);
            httpStatus = savedSalesEntities == null ? HttpStatus.INTERNAL_SERVER_ERROR : HttpStatus.CREATED;

        } catch (Exception e) {
            e.getStackTrace();
            throw e;
        }
        return new ResponseEntity<>(savedSalesEntities, httpStatus);
    }

    @RequestMapping(value = "/sale/{salesId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteSale(@PathVariable Integer salesId) {
        try {
            salesRepository.deleteById(salesId);
        } catch (Exception e) {
            e.getStackTrace();
            throw e;
        }
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/sales", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteSales(@RequestBody List<SalesEntity> salesEntity) {
        try {
            salesRepository.deleteAll(salesEntity);
        } catch (Exception e) {
            e.getStackTrace();
            throw e;
        }
        return ResponseEntity.ok().build();
    }
}
