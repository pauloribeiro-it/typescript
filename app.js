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
var studentList = [
    { Name: "Pessoa1", Age: 20, PhoneNumber: 121212121, Language: LanguageKnown[LanguageKnown.English] },
    { Name: "Pessoa2", Age: 21, PhoneNumber: 131313131, Language: LanguageKnown[LanguageKnown.Spanish] },
    { Name: "Pessoa3", Age: 22, PhoneNumber: 141414141, Language: LanguageKnown[LanguageKnown.French] }
];
studentList.push(student);
for (var index = 0; index < studentList.length; index++) {
    var element = studentList[index];
    console.log(element);
}
//# sourceMappingURL=app.js.map