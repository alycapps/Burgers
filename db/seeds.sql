insert into burgers (burger_name) value ("Hit Me with Your Best Shallot Burger");
insert into burgers (burger_name) value ("I Know Why the Cajun Burger Sings");
insert into burgers (burger_name) value ("Don't You Four Cheddar 'bout Me Burger");
insert into burgers (burger_name) value ("I've Created a Meunster Burger");
insert into burgers (burger_name) value ("Blondes Have More Fun-gus Burger");

update burgers set devoured = true where id= 1;
delete from burgers where id=8;
select * from burgers;