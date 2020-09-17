"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "GUEST";
    Role[Role["AUTHOR"] = 10] = "AUTHOR";
})(Role || (Role = {}));
var person = [{
        name: "Ovi",
        age: 29,
        hobbies: ["paragliding", "kiting"],
        role: Role.ADMIN
    }];
console.log(person[0].age);
for (var _i = 0, _a = person[0].hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
