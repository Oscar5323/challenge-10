INSERT INTO departments (department_name)
VALUES 
('Engineering'),
('Marketing'),
('Human Resources');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Senior Engineer', 200000.00, 1)
('Marketing Manager', 120000.00, 2),
('HR Director', 160000.00, 3),


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Erik','Garza','2','3'),
('MATT','Zunin','1','1'),
('Keuntai','Kai','3','2')