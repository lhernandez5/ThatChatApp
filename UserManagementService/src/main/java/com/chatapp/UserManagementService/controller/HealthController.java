package com.chatapp.UserManagementService.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth/")
public class HealthController {

    @GetMapping("/check")
    public ResponseEntity<String> check(){
        return ResponseEntity.ok("User Authentication Service is up and running!");
    }
}

