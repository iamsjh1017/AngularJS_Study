create table restaurant (
	name varchar 
);

create table chicken(
	no int primary key auto_increment,
	name varchar(30),
	price int
);

insert into chicken(name,price) values("후라이드치킨",16000);
insert into chicken(name,price) values("마늘치킨",17000);
insert into chicken(name,price) values("양념치킨",17000);
insert into chicken(name,price) values("반반치킨",17000);
insert into chicken(name,price) values("간장치킨",17000);

select * from chicken;

drop table chicken;

