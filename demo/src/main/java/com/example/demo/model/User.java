package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;



@Entity
@Data
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "phone", unique = true)
    private String phone;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    // Getters and Setters
}
