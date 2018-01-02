"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
var LanguageKnown;
(function (LanguageKnown) {
    LanguageKnown[LanguageKnown["English"] = 0] = "English";
    LanguageKnown[LanguageKnown["Spanish"] = 1] = "Spanish";
    LanguageKnown[LanguageKnown["French"] = 2] = "French";
    LanguageKnown[LanguageKnown["Portuguese"] = 3] = "Portuguese";
})(LanguageKnown || (LanguageKnown = {}));
let student = {
    Name: "Paulo",
    Age: 24,
    PhoneNumber: 123456789,
    Language: LanguageKnown[LanguageKnown.Portuguese]
};
let studentListGenerics = [
    { Name: "Pessoa1", Age: 20, PhoneNumber: 121212121, Language: LanguageKnown[LanguageKnown.English] },
    { Name: "Pessoa2", Age: 21, PhoneNumber: 131313131, Language: LanguageKnown[LanguageKnown.Spanish] },
    { Name: "Pessoa3", Age: 22, PhoneNumber: 141414141, Language: LanguageKnown[LanguageKnown.French] }
];
studentListGenerics.push(student);
// for (let index = 0; index < studentList.length; index++) {
//     var element = studentList[index];
//     console.log(element);
// }
//printStudentsList(studentList);
//GetNumbers(1,2,3,4,5);
//GetInfo("hi");
//GetInfo();
function printStudentsList(students) {
    students.forEach(element => {
        console.log("Name: " + element.Name);
    });
}
//Rest parameter function
function GetNumbers(...nums) {
    nums.forEach(element => {
        console.log("Num: " + element);
    });
}
//Default parameters
function GetInfo(info = "hello") {
    console.log(info);
}
//#####################################ADVANCED FUNCTIONS #########################################
//Anonymous function
let StudentName = function (lName, fName) {
    return fName + "..." + lName;
};
console.log(StudentName("Washington", "George"));
//Arrow Function
let StudentFullName = (lName, fName) => { return fName + " - " + lName; };
console.log(StudentFullName("Kuchiki", "Byakuya"));
//############################CLASSES###############################
let s = new Student_1.default("Kurosaki", "Ichigo");
console.log("Full name: " + s.GetFullName());
//*****************************Generics*************************************/
function printGenericStudentsList(students) {
    students.forEach(element => {
        console.log("Name: " + element.Name);
    });
}
printGenericStudentsList(studentListGenerics);
//# sourceMappingURL=app.js.map