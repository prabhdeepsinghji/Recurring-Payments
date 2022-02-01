package com.demo.recpay.recpay.model;

import lombok.Data;

@Data
public class StatementDTO {
    private String from;
    private String to;

    public StatementDTO(String from, String to) {
        this.from = from;
        this.to = to;
    }

    public StatementDTO() {
    }
}
