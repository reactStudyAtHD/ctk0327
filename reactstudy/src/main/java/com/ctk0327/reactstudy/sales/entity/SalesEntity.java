package com.ctk0327.reactstudy.sales.entity;

import javax.persistence.*;

@Entity
@Table(name = "sales")
public class SalesEntity {
    @Id
    @GeneratedValue
    @Column(name = "SALE_ID")
    private Integer saleId;

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

    @Column(name = "SALE_DATE")
    private java.sql.Date saleDate;


    public Integer getSaleId() {
        return this.saleId;
    }

    public void setSaleId(Integer saleId) {
        this.saleId = saleId;
    }

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

    public java.sql.Date getSaleDate() {
        return this.saleDate;
    }

    public void setSaleDate(java.sql.Date saleDate) {
        this.saleDate = saleDate;
    }
}
