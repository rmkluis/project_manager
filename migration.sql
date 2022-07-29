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
    phone_number TEXT
);
----matching table to allow many employees to have many projects and collaboration
CREATE TABLE matching(
    id SERIAL,
    employee_id INT,
    project_id INT,
    mother_project INT,
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
INSERT INTO employees (first_name, last_name, username) VALUES ('bob', 'bobson', 'bobbobson');
INSERT INTO employees (first_name, last_name, username) VALUES ('janet', 'janetsdotter', 'janet');
INSERT INTO employees (first_name, last_name, username) VALUES ('wilson', 'fisk', 'kingpin');

INSERT INTO projects (project_name, creator) VALUES ('welcome', 'bob');
INSERT INTO projects (project_name, creator) VALUES ('welcome', 'janet');
INSERT INTO projects (project_name, creator) VALUES ('welcome', 'wilson');
