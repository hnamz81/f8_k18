//Lesson
interface EmployeeI {
    getId(): number
    getName(): string
    setName(name: string): void
    getSalary(): number
    setSalary(salary: number): void
    calculateSalary(): number
}
abstract class Employee implements EmployeeI {
    protected id: number
    protected name: string
    protected salary: number

    constructor(id: number, name: string, salary: number) {
        this.id = id
        this.name = name
        this.setSalary(salary)
    }

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    setName(name: string): void {
        this.name = name
    }

    getSalary(): number {
        return this.salary
    }

    setSalary(salary: number): void {
        if (salary <= 0) {
            throw new Error("Salary must be greater than 0")
        }
        this.salary = salary
    }

    abstract calculateSalary(): number
}
class Developer extends Employee {
    private overtimeHours: number

    constructor(id: number, name: string, salary: number, overtimeHours: number) {
        super(id, name, salary)
        this.overtimeHours = overtimeHours
    }

    calculateSalary(): number {
        return this.getSalary()+ this.overtimeHours * 50000
    }
}
class Manager extends Employee {
    private teamSize: number

    constructor(id: number, name: string, salary: number, teamSize: number) {
        super(id, name, salary)
        this.teamSize = teamSize
    }

    calculateSalary() {
        return this.getSalary() + this.teamSize * 200000
    }
}
const dev = new Developer(1, "Bon", 70000, 15)
console.log(dev.calculateSalary())

const man = new Manager(2, "Ba", 80000, 8)
console.log(man.calculateSalary())

const man1 = new Manager(3, "Khai", 50000, 5)
man1.setName("Khai Updated")
console.log(man1.getName())
console.log(man1.getSalary())
