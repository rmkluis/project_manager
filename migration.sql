--DROP previous tables
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS matching;
DROP TABLE IF EXISTS projects;
--CREATE tables
----employees info
CREATE TABLE employees(
    id SERIAL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    avatar TEXT,
    username TEXT NOT NULL,
    email TEXT,
    phone_number TEXT,
    supervisor TEXT
);
----matching table to allow many employees to have many projects and collaboration
CREATE TABLE matching(
    id SERIAL,
    employee_id INT,
    project_id INT,
    mother_project INT
);
----projects info
CREATE TABLE projects(
    id SERIAL,
    project_name TEXT,
    category TEXT,
    flag TEXT,
    details TEXT,
    creator TEXT NOT NULL
);
--INSERT junk data into tables for practice
INSERT INTO employees (first_name, last_name, username, email, phone_number, supervisor) VALUES ('bob', 'bobson', 'bobbobson', 'bob@projectapp.com', '813-555-2314', 'Steve');
INSERT INTO employees (first_name, last_name, username, email, phone_number, supervisor) VALUES ('janet', 'janetsdotter', 'janet', 'janet@projectapp.com', '727-555-7777', 'Steve');
INSERT INTO employees (first_name, last_name, username, email, phone_number, supervisor) VALUES ('wilson', 'fisk', 'kingpin', 'kingpin@fiskenterprises.com', '990-555-0099', 'Steve');

INSERT INTO matching (employee_id, project_id, mother_project) VALUES (1, 1, null);
INSERT INTO matching (employee_id, project_id, mother_project) VALUES (2, 1, null);
INSERT INTO matching (employee_id, project_id, mother_project) VALUES (3, 1, null);
INSERT INTO matching (employee_id, project_id, mother_project) VALUES (1, 2, null);
INSERT INTO matching (employee_id, project_id, mother_project) VALUES (1, 2, null);
INSERT INTO matching (employee_id, project_id, mother_project) VALUES (1, 2, null);

INSERT INTO projects (project_name, category, flag, details, creator) VALUES ('welcome party', 'integration', 'last', 'Welcome party for Janet', 'Steve');
INSERT INTO projects (project_name, category, flag, details, creator) VALUES ('presentation for the board', 'executive', 'first', 'Critical task: be sure to include latest figures on the thing with the other thing', 'Steve');
INSERT INTO projects (project_name, category, flag, details, creator) VALUES ('chicken concept art', 'illustrations', 'mid', 'chicken with bazookas: 2000px x 2000px', 'Steve');
INSERT INTO projects (project_name, category, flag, details, creator) VALUES ('taco concept art', 'illustrations', 'mid', 'taco on fire: 2000px x 2000px', 'Steve');
INSERT INTO projects (project_name, category, flag, details, creator) VALUES ('warrior concept art', 'illustrations', 'mid', 'bald warrior with spear and armor: 2000px x 2000px', 'Steve');
INSERT INTO projects (project_name, category, flag, details, creator) VALUES ('wizard concept art', 'illustrations', 'mid', 'wizard that summons chickens with bazookas: 2000px x 2000px', 'Steve');