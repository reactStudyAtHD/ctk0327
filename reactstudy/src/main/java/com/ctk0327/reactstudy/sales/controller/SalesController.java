package com.ctk0327.reactstudy.sales.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ctk0327.reactstudy.common.Config.Swagger2Config;
import com.ctk0327.reactstudy.sales.entity.SalesEntity;
import com.ctk0327.reactstudy.sales.repository.SalesRepository;

import io.swagger.annotations.Api;

@RestController
@CrossOrigin (origins = {"*"})
@Api(tags = { Swagger2Config.TAG_1})
public class SalesController {
    @Autowired
    private SalesRepository salesRepository;

    @RequestMapping(value = "/sales", method = RequestMethod.GET)
    public ResponseEntity<List<SalesEntity>> getSales(
            @RequestParam(value = "saleYear", required = false) Integer saleYear,
            @RequestParam(value = "saleMonth", required = false)
                    Integer saleMonth) {
        List<SalesEntity> salesEntities=null;
        if (saleMonth == null && saleYear == null) {
            salesEntities = salesRepository.findAll();
        } else if (saleYear == null) {
            salesEntities = salesRepository.findBySaleMonth(saleMonth);
        } else if (saleMonth == null) {
            salesEntities = salesRepository.findBySaleYear(saleYear);
        } else {
            salesEntities = salesRepository.findBySaleYearAndSaleMonth(saleYear, saleMonth);
        }
        return new ResponseEntity<>(salesEntities, HttpStatus.OK);
    }

    @RequestMapping(value = "/sale", method = RequestMethod.GET)
    public ResponseEntity<SalesEntity> getSale(@RequestParam(value = "saleId", required = true) Integer saleId) {
        final SalesEntity salesEntity=salesRepository.findById(saleId).isPresent()?salesRepository.findById(saleId).get():null;
        final HttpStatus httpStatus=salesEntity==null?HttpStatus.NOT_FOUND:HttpStatus.OK;
        return  new ResponseEntity<>(salesEntity,httpStatus);
    }
}
