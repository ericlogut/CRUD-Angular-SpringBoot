package com.javacourse.springboot_backend.seeder;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.javacourse.springboot_backend.model.Employee;
import com.javacourse.springboot_backend.repository.EmployeeRepository;

@Configuration
public class EmployeeSeeder {

    // Inicializa la base de datos con algunos empleados de ejemplo
    @Bean
    CommandLineRunner initDatabase(EmployeeRepository repository) {
        return args -> {
            repository.save(new Employee("Juan", "Pérez", "juan.perez@example.com"));
            repository.save(new Employee("María", "García", "maria.garcia@example.com"));
            repository.save(new Employee("Carlos", "López", "sergio.lopez@example.com"));
            repository.save(new Employee("Ana", "Martínez", "ana.martinez@example.com"));
        };
    }
}
