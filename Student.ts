export default class Student{
       
    constructor(private lName:string,private fName:string){
        this.lName = lName;
        this.fName = fName;
    }

    GetFullName():string{
        return this.lName + "..." + this.fName;
    }
}

//export {Student}