//can return any type
function empInfo(id:number, name:string, salary:number){
	console.log("id is "+id);
	console.log("name is "+name);
	console.log("salary is "+salary);
}

//must return string
empInfo(100,"Nik",12000);

function sayHello(name:string){
	return("Welcome "+name);
}
console.log(sayHello("Nik"));

//no return type
function add(a:number,b:number):void{
	let sum = a+b;
	console.log(sum);
}
add(1,2);

function personDetails(id?:number,name?:string,age?:number){
	console.log("id is "+id)
	console.log("name is "+name)
	console.log("age is "+age)
}

personDetails(1,"Nik",23);
personDetails(2,"Kyle");
personDetails(3)
personDetails()

function empDetails(id:number=123,name:string="unknown",age:number=21){
        console.log("id is "+id)
        console.log("name is "+name)
        console.log("age is "+age)
}

empDetails(1,"Nik",23);
empDetails(2,"Kyle");
empDetails(3)
empDetails()



