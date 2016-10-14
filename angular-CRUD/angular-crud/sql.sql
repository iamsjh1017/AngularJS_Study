create table chicken(
	name varchar(30),
	price int
);

insert into chicken
values ('후라이드치킨', 16000);
insert into chicken
values ('양념치킨', 17000);
insert into chicken
values ('반반치킨', 17000);
insert into chicken
values ('마늘치킨', 17000);
insert into chicken
values ('간장치킨', 17000);

select * from chicken;
delete from chicken;