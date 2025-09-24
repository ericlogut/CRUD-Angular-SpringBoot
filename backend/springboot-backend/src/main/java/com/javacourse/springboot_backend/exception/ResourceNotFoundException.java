package com.javacourse.springboot_backend.exception;

// Importamos las librerías necesarias
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// Indicamos que esta excepción devolverá un estado 404 NOT FOUND
@ResponseStatus(value = HttpStatus.NOT_FOUND)
// Esto es una excepción personalizada que extiende de RuntimeException
// La usaremos cuando no encontremos un recurso (por ejemplo, un empleado por id)
public class ResourceNotFoundException extends RuntimeException {
    
    // Esto es para evitar un warning
    private static final long serialVersionUID = 1L;

    // El mensaje de la excepción
    public ResourceNotFoundException(String message) {
        super(message);
    }

}
