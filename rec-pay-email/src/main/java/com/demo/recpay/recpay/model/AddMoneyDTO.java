package com.demo.recpay.recpay.model;

import lombok.Data;

@Data
public class AddMoneyDTO {
    private int amount;

    public AddMoneyDTO(int amount) {
        this.amount = amount;
    }

    public AddMoneyDTO() {
    }
}
