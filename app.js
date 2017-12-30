//Interfaces
var LanguageKnown;
(function (LanguageKnown) {
    LanguageKnown[LanguageKnown["English"] = 0] = "English";
    LanguageKnown[LanguageKnown["Spanish"] = 1] = "Spanish";
    LanguageKnown[LanguageKnown["French"] = 2] = "French";
    LanguageKnown[LanguageKnown["Portuguese"] = 3] = "Portuguese";
})(LanguageKnown || (LanguageKnown = {}));
var student = {
    Name: "Paulo",
    Age: 24,
    PhoneNumber: 123456789,
    Language: LanguageKnown[LanguageKnown.Portuguese]
};
var studentListGenerics = [
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
    students.forEach(function (element) {
        console.log("Name: " + element.Name);
    });
}
//Rest parameter function
function GetNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log("Num: " + element);
    });
}
//Default parameters
function GetInfo(info) {
    if (info === void 0) { info = "hello"; }
    console.log(info);
}
//#####################################ADVANCED FUNCTIONS #########################################
//Anonymous function
var StudentName = function (lName, fName) {
    return fName + "..." + lName;
};
console.log(StudentName("Washington", "George"));
//Arrow Function
var StudentFullName = function (lName, fName) { return fName + " - " + lName; };
console.log(StudentFullName("Kuchiki", "Byakuya"));
//############################CLASSES###############################
var Student = /** @class */ (function () {
    function Student(lName, fName) {
        this.lName = lName;
        this.fName = fName;
        this.lName = lName;
        this.fName = fName;
    }
    Student.prototype.GetFullName = function () {
        return this.lName + "..." + this.fName;
    };
    return Student;
}());
var s = new Student("Kurosaki", "Ichigo");
console.log("Full name: " + s.GetFullName());
//*****************************Generics*************************************/
function printGenericStudentsList(students) {
    students.forEach(function (element) {
        console.log("Name: " + element.Name);
    });
}
printGenericStudentsList(studentListGenerics);
//# sourceMappingURL=app.js.map