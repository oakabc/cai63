CREATE DATABASE bookstore;
use bookstore;

CREATE TABLE employees (
  id INTEGER auto_increment,
  firstname VARCHAR(50),
  lastname VARCHAR(50),
  age int,
  created_at timestamp default now(),
  primary KEY(id)
);

create table Books (
	id int auto_increment,
    ISBN varchar(13) not null,
    bname varchar(100) not null,
    price float not null,
    created_at timestamp default now(),
    primary key(id),
    unique(ISBN)
);
create table sell_histories (
	id int auto_increment,
    ISBN varchar(13),
    emp_id int,
    price float,
    amount int,
    created_at timestamp default now(),
    primary key(id),
    foreign key(emp_id) references employees(id)
    


);

insert into sell_histories(isbn, emp_id, price, amount) values
('9783598215933', 1, 250, 5),
('9783598215957', 1, 352, 1),
('9783598215766', 3, 289, 2),
('9783598215957', 4, 352, 4),
('9783598215933', 4, 250, 6),
('9783598215919', 2, 199, 2),
('9783598215933', 3, 250, 3),
('9783598215995', 2, 157, 2),
('9783598215919', 3, 199, 7),
('9783598215995', 1, 157, 1);
select sum(amount) from sell_histories;
select distinct isbn from sell_histories;
select sum( amount*price ) as sell_total from sell_histories;

INSERT INTO employees(firstname, lastname, age) values
('Noah', 'Armstrong', 34),
('Leslie', 'Ellis', 24),
('Sandra', 'Hoffman', 35),
('Cameron', 'Meyer', 19),
('Cameron', 'Moore', 27);

DELETE FROM employees
WHERE id = 5;

ALTER TABLE employees
ADD COLUMN address varchar(255);

select count(*) as NumOfEmp from employees;
select firstname, lastname from employees where age < 20;
select firstname, age from employees;

UPDATE employees
SET firstname = 'Neil'
WHERE firstname = 'Noah'
limit 1;


INSERT INTO books(isbn, bname, price) values
('9783598215933', 'The Marquis and I', 250),
('9783598215957', 'Blood on the Tongue', 352),
('9783598215995', 'A Higher Loyalty', 157),
('9783598215919', 'The Mars Room', 199),
('9783598215766', 'His Toy', 289);



select bname from books where bname like '%mar%';
select bname from books where bname like '%o%' limit 2;


