export class Student {
    FirstName:string;
    LastName:string;
    Address:string;
    Age:number;
    Gender:string;
    
    getFullName = () => `${this.FirstName}  ${this.LastName}`;
    
    getAge = () => `You are ${this.Age} old!`;
    
    getAddress = () => `You live in ${this.Address}`;
    
    getGender = () => `You are ${this.Gender}`;
    
}