//Interfaces

interface StudentInfo{
    Name: string,
    Age: Number,
    PhoneNumber: Number,
    Language: string
}
enum LanguageKnown{
    English,Spanish, French, Portuguese
}

let student:StudentInfo = {
    Name : "Paulo",
    Age: 24,
    PhoneNumber : 123456789,
    Language: LanguageKnown[LanguageKnown.Portuguese]
}

let studentList:StudentInfo[] = [
    {Name:"Pessoa1",Age:20,PhoneNumber:121212121, Language: LanguageKnown[LanguageKnown.English]},
    {Name:"Pessoa2",Age:21,PhoneNumber:131313131, Language: LanguageKnown[LanguageKnown.Spanish]},
    {Name:"Pessoa3",Age:22,PhoneNumber:141414141, Language: LanguageKnown[LanguageKnown.French]}
]

studentList.push(student)

// for (let index = 0; index < studentList.length; index++) {
//     var element = studentList[index];
//     console.log(element);
// }
//printStudentsList(studentList);
//GetNumbers(1,2,3,4,5);
//GetInfo("hi");
//GetInfo();

function printStudentsList(students: StudentInfo[]){
    students.forEach(element => {
        console.log("Name: "+element.Name);
    });
}
//Rest parameter function
function GetNumbers(...nums:number[]){
    nums.forEach(element => {
        console.log("Num: "+element);
    });
}

//Default parameters
function GetInfo(info:string = "hello"){
    console.log(info);
}


//#####################################ADVANCED FUNCTIONS #########################################
//Anonymous function
let StudentName = function(lName:string,fName:string){
    return fName + "..." + lName;
}

console.log(StudentName("Washington","George")) ;

//Arrow Function
let StudentFullName = (lName:string,fName:string) => {return fName + " - " + lName};

console.log(StudentFullName("Kuchiki","Byakuya"));
