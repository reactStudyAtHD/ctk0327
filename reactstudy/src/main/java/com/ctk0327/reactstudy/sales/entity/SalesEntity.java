package com.ctk0327.reactstudy.sales.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.*;

@Entity
@Table(name = "sales")
public class SalesEntity {

    @Id
    @Column(name = "SALE_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer saleId;

    @Column(name = "SALE_DATE")
    private LocalDate saleDate;

    @Column(name = "SALE_YEAR")
    private Integer saleYear;

    @Column(name = "SALE_MONTH")
    private Integer saleMonth;

    @Column(name = "TABLE_COUNT")
    private Integer tableCount;

    @Column(name = "CARD_SALES")
    private Integer cardSales;

    @Column(name = "MONEY_SALES")
    private Integer moneySales;

    @Column(name = "SERVICE_SALES")
    private Integer serviceSales;

    public Integer getSaleYear() {
        return this.saleYear;
    }

    public void setSaleYear(Integer saleYear) {
        this.saleYear = saleYear;
    }

    public Integer getSaleMonth() {
        return this.saleMonth;
    }

    public void setSaleMonth(Integer saleMonth) {
        this.saleMonth = saleMonth;
    }

    public Integer getTableCount() {
        return this.tableCount;
    }

    public void setTableCount(Integer tableCount) {
        this.tableCount = tableCount;
    }

    public Integer getCardSales() {
        return this.cardSales;
    }

    public void setCardSales(Integer cardSales) {
        this.cardSales = cardSales;
    }

    public Integer getMoneySales() {
        return this.moneySales;
    }

    public void setMoneySales(Integer moneySales) {
        this.moneySales = moneySales;
    }

    public Integer getServiceSales() {
        return this.serviceSales;
    }

    public void setServiceSales(Integer serviceSales) {
        this.serviceSales = serviceSales;
    }

    public LocalDate getSaleDate() {
        return this.saleDate;
    }

    public void setSaleDate(LocalDate saleDate) {
        setSaleMonth(saleDate.getMonthValue());
        setSaleYear(saleDate.getYear());
        this.saleDate = saleDate;
    }

    public Integer getSaleId() {
        return saleId;
    }

    public void setSaleId(Integer saleId) {
        this.saleId = saleId;
    }
}
