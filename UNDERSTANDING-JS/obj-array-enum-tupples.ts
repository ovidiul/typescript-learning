/*const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
}[] = [{
    name: "Ovi",
    age: 29,
    hobbies: ["paragliding", "kiting"],
    role: [2, 'Author']
}]*/

enum Role { ADMIN = 5, READ_ONLY = 'GUEST', AUTHOR = 10}

const person= [{
    name: "Ovi",
    age: 29,
    hobbies: ["paragliding", "kiting"],
    role: Role.ADMIN
}]

console.log(person[0].age)

console.log(Role[person[0].role])

for (const hobby of person[0].hobbies) {
    console.log(hobby.toUpperCase())
}