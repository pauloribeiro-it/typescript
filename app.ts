enum LanguageKnown{
    English,Spanish, French, Portuguese
}

let student = {
    Name : "Paulo",
    Age: 24,
    PhoneNumber : 123456789,
    Language: LanguageKnown[LanguageKnown.Portuguese]
}

let studentList = [
    {Name:"Pessoa1",Age:20,PhoneNumber:121212121, Language: LanguageKnown[LanguageKnown.English]},
    {Name:"Pessoa2",Age:21,PhoneNumber:131313131, Language: LanguageKnown[LanguageKnown.Spanish]},
    {Name:"Pessoa3",Age:22,PhoneNumber:141414141, Language: LanguageKnown[LanguageKnown.French]}
]

studentList.push(student)

for (let index = 0; index < studentList.length; index++) {
    var element = studentList[index];
    console.log(element);
}
