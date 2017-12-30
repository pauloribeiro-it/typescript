var student = {
    Name: "Paulo",
    Age: 24,
    PhoneNumber: 123456789
};
var studentList = [
    { Name: "Pessoa1", Age: 20, PhoneNumber: 121212121 },
    { Name: "Pessoa2", Age: 21, PhoneNumber: 131313131 },
    { Name: "Pessoa3", Age: 22, PhoneNumber: 141414141 }
];
studentList.push(student);
for (var index = 0; index < studentList.length; index++) {
    var element = studentList[index];
    console.log(element);
}
//# sourceMappingURL=app.js.map