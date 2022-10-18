use employees_db;


-- inserting department names in department section
INSERT INTO DEPARTMENT (name)
VALUES 
('Human Resources'),
('Finance'),
('Information and Technology'),
('Sales'),
('Marketing'),
('security');

-- adding titile salary and department id values to role section

INSERT INTO ROLE (department_id, title, salary, )
values 
(1 , 'Manager', 150000),
(2 , 'Accountant' 70000 ),
(3 , 'Full stack Web Developer' 150000 ),
(4 , 'Customer Representative', 75000),
(5 , 'Sales Represntative', 50000),
(6 , 'Body Gaurd', 90000);

-- addinfg employee names and and role id 
INSERT INTO employee (role_id, first_name, last_name,  manager_id)
VALUES
(1, 'hiren', 'patel', 123),
(2, 'neha', 'patel' 456),
(3, 'alan', 'smith', 789),
(4, 'roger', 'patmas', 012),
(5, 'wiki', 'pedia', 345),
(6, 'fan', 'tastic', 678);
