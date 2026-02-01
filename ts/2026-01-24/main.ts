//Lesson 1
interface PartTime {
    id: number,
    name: string,
    salary: number,
    hoursWorked: number
}
const partTime: PartTime = {
    id: 2,
    name: "Binh",
    salary: 20,
    hoursWorked: 40
}
const npartTime : PartTime ={
    ...partTime,
        hoursWorked: 45
}
console.log(partTime)
console.log(npartTime)
//Lesson 2
interface Employee {
    id: number
    name: string
    salary: number
    getSalary(): number
}
class FullTimeEmployee implements Employee{
    id: number
    name: string
    salary: number
    hoursWorked: number
    getSalary(): number {
        return this.salary;
    }
}

class PartTimeEmployee implements Employee{
    id: number;
    name: string;
    salary: number;
    hoursWorked: number;
    getSalary(): number {
        return this.salary * this.hoursWorked;
    }
}

function calculateTotalSalary(employees: Employee[]): number {
    let sum = 0;
    for (const employee of employees) {
        sum += employee.getSalary();
    }
    return sum
}

//examples
const fullTimeEmployee = new FullTimeEmployee();
fullTimeEmployee.id = 1;
fullTimeEmployee.name = "Hoai Nam";
fullTimeEmployee.salary = 3000;

const partTimeEmployee = new PartTimeEmployee();
partTimeEmployee.id = 2;
partTimeEmployee.name = "Van Lan";
partTimeEmployee.salary = 3000;
partTimeEmployee.hoursWorked = 12;

console.log(calculateTotalSalary([fullTimeEmployee, partTimeEmployee]))