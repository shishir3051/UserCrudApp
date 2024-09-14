package com.empproject.EmpManagementProject.controller;


import com.empproject.EmpManagementProject.model.Employee;
import com.empproject.EmpManagementProject.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employees")
@CrossOrigin("http://localhost:5173/")
public class EmpController {



    @Autowired
    EmployeeService employeeService;

    @GetMapping("/employees")
    public List<Employee> getAllEmployee(){
        return employeeService.readEmployees();
    }

    @PostMapping("/employees")
    public String createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);

    }

    @DeleteMapping("/employees/{id}")
    public String deleteEmployee(@PathVariable Long id){
        if (employeeService.deleteEmployee(id)){
            return "Delete Successfully";
        }else {
            return "Delete Unsuccessfully";
        }
    }
}
