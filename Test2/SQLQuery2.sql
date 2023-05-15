use Aditya2

select * from Test2

update Test2 set Manager_id=3 where Emp_id=4;



Select e1.Name as Manager, e2.Name  from Test2 e1 Join Test2 e2 on e1.Emp_Id= e2.Manager_Id order by e1.Name asc;