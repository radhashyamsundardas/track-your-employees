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

INSERT INTO role ( title, salary , department_id)
values 
( 'Manager', 150000, 1 ),
( 'Accountant' 70000, 2 ),
( 'Full stack Web Developer' 150000, 3 ),
( 'Customer Representative', 75000, 4),
( 'Sales Represntative', 50000, 5),
('Body Gaurd', 90000, 6);

-- addinfg employee names and and role id 
INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES
( 'hiren', 'patel',1, 123),
( 'neha', 'suman' ,2, 456),
( 'alan', 'smith',3, 789),
( 'roger', 'patmas',4, 012),
('wiki', 'pedia',5,  345),
( 'fan', 'tastic',6, 678);
