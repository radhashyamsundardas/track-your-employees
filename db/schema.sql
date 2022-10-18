    DROP DATABASE IF EXISTS employee_db;
    CREATE DATABASE employee_db;
    USE employee_db;
--  Creating table for the depatment which includes id and name
    CREATE TABLE department (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(30) NOT NULL
    );
-- creating table for role
    CREATE TABLE role (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INT NOT NULL,
        PRIMARY KEY (id)

    );
    CREATE TABLE employee (
        id INT PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT NOT NULL,
        manager_id INT NULL,
        PRIMARY KEY (id)
    );
