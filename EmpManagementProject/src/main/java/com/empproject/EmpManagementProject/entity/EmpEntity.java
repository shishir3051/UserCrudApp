package com.empproject.EmpManagementProject.entity;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "employee_db")
public class EmpEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private String name;
    private String phone;
    private String email;
}
