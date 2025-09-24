package com.javacourse.springboot_backend.repository;

// Importamos las librerías necesarias
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.javacourse.springboot_backend.model.Employee;

// Con JpaRepository ya tenemos los métodos CRUD implementados
// Le pasamos la entidad y el tipo de dato de la clave primaria
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
