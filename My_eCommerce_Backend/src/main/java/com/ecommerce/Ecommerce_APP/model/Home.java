package com.ecommerce.Ecommerce_APP.model;

import java.util.List;

import lombok.Data;

@Data
public class Home {

    private List<HomeCategory> grid;

    private List<HomeCategory> shopByCategory;

    private List<HomeCategory> electricalByCategory;

    private List<HomeCategory> dealerCategory;

    private List<Deal> deals;




}
