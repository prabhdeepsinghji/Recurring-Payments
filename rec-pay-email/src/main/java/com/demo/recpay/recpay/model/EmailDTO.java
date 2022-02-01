package com.demo.recpay.recpay.model;

import lombok.Data;

@Data
public class EmailDTO {
    private String email;

    public EmailDTO(String email) {
        this.email = email;
    }

    public EmailDTO() {
    }
}
