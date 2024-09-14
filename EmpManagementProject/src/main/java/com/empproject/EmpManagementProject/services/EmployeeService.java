package com.empproject.EmpManagementProject.services;

import com.empproject.EmpManagementProject.model.Employee;

import java.util.List;

public interface EmployeeService {
    String createEmployee(Employee employee);
    List<Employee> readEmployees();
    boolean deleteEmployee(Long id);


}
