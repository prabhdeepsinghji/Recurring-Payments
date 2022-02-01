package com.demo.recpay.recpay.model;

import lombok.Data;

@Data
public class PasswordDto {

    private  String token;

    private String password;

    public PasswordDto(String token, String password) {
        this.token = token;
        this.password = password;
    }

    public PasswordDto() {
    }
}
