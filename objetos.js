//1.Crear un objeto vacío llamado dog
const dog = {};

//2.Imprime el objeto dog en la consola
console.log(dog);

//3.Añade las propiedades name, legs, color, age y bark para el objeto dog. La propiedad bark es un método que devuelve woof woof

const dogg = {
    name: 'yuyuy',
    legs: 'lolo',
    color: 'lili',
    age: 'lulu',
    bark: function () {
        return 'woof woof';
    }
};

//4.Obtener name, legs, color, age y el valor de bark del objeto dog

console.log(dogg.name);
console.log(dogg.legs);
console.log(dogg.color);
console.log(dogg.age);
console.log(dogg.bark());

//5.Establecer nuevas propiedades al objeto dog: breed, getDogInfo

dogg.breed = 'fofo';
dogg.getDogInfo = function () {
    return `${this.name}  ${this.breed} ${this.age}  ${this.color} ${this.legs} `;
};
console.log(dogg.getDogInfo());


//===========================Nivel 2========================
const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Alfred: {
        email: 'alfred@alfred.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
//1.Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.

let mostSkilledUser = '';
let maxSkills = 0;
for (let user in users) {
    let numSkills = users[user].skills.length;
    if (numSkills > maxSkills) {
        maxSkills = numSkills;
        mostSkilledUser = user;
    }
}
console.log(`La persona que tiene más habilidades es ${mostSkilledUser}`);

//2.Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del siguiente objeto.


let countUsers = 0;
for (let user in users) {
    if (users[user].isLoggedIn) {
        countUsers++;
    }
}
console.log(`Hay ${countUsers} usuarios conectados.`);

let countPoints = 0;
for (let user in users) {
    if (users[user].points > 50) {
        countPoints++;
    }
}
console.log(`Hay ${countPoints} usuarios con más de 50 puntos.`);

//3.Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios

const mernDevelopers = [];

for (let user in users) {
    const skills = users[user].skills;
    if (skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node')) {
        mernDevelopers.push(user);
    }
}
console.log(mernDevelopers);

//4.Establezca su nombre en el objeto usuarios sin modificar el objeto usuarios original
const nuevosUsuarios = { ...users, Aiman: { email: 'aimanmoroco@gmail.com', skills: ['JavaScript', 'React', 'Node.js'], age: 25, isLoggedIn: false, points: 0 } };
console.log(nuevosUsuarios);

//5.Obtener todas las claves o propiedades del objeto usuarios

const propiedades = Object.keys(users);
console.log(propiedades);

//6.Obtener todos los valores del objeto usuarios

const valores = Object.values(users);
console.log(valores);

//7.Utilice el objeto países para imprimir el nombre del país, la capital, la población y los idiomas.
const paises = {
    españa: {
        capital: 'Madrid',
        poblacion: 1000000,
        idiomas: ['español']
    },
    estadosUnidos: {
        capital: 'Washington D.C.',
        poblacion: 2000000,
        idiomas: ['inglés']
    },
    moroco: {
        capital: 'Rabat',
        poblacion: 30000000,
        idiomas: ['arabe', 'francés']
    }
};
for (let pais in paises) {
    console.log(`Nombre del país: ${pais}`);
    console.log(`Capital: ${paises[pais].capital}`);
    console.log(`Población: ${paises[pais].poblacion}`);
    console.log(`Idiomas: ${paises[pais].idiomas}`);
}

//===================Nivel 3====================

//1.Crea un objeto literal llamado personAccount. Tiene las propiedades firstName, lastName, incomes, expenses y tiene los metodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Incomes es un conjunto de ingresos y su descripción y expenses es un conjunto de ingresos y su descripción.

const personAccount = {
    firstName: "aiman",
    lastName: "al khamlichi",
    incomes: 1600,
    expenses: 1000,
    totalIncome: function () {
        console.log(totalIncome);
    },
    totalExpense: function () {
        console.log(totalExpense);
    },
    accountInfo: function () {
        console.log(accountInfo);
    },
    addIncome: function () {
        console.log(addIncome);
    },
    addExpense: function () {
        console.log(addExpense);
    },
    accountBalance: function () {
        console.log(accountBalance);
    }
};
console.log(personAccount);

//2.Preguntas:2, 3 y 4 se basan en los siguientes dos arrays: users y products ()
const userrs = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2020 9:00 AM",
        isLoggedIn: false,
    },
    {
        _id: "fg12cy",
        username: "Alfred",
        email: "alfred@alfred.com",
        password: "123456",
        createdAt: "08/01/2020 9:30 AM",
        isLoggedIn: true,
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2020 9:45 AM",
        isLoggedIn: true,
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
    },
    {
        _id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "08/01/2020 10:00 AM",
        isLoggedIn: false,
    },
];

const products = [
    {
        _id: "eedfcf",
        name: "mobile phone",
        description: "Huawei Honor",
        price: 200,
        ratings: [
            { userId: "fg12cy", rate: 5 },
            { userId: "zwf8md", rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: "aegfal",
        name: "Laptop",
        description: "MacPro: System Darwin",
        price: 2500,
        ratings: [],
        likes: ["fg12cy"],
    },
    {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [{ userId: "fg12cy", rate: 5 }],
        likes: ["fg12cy"],
    },
];


//a. Crear una función llamada signUp que permita al usuario añadirse a la colección. Si el usuario existe, informar al usuario que ya tiene una cuenta.
function signUp(userrs, products) {
    if (products.includes(userrs)) {
        return userrs;
    } else {
        products.push(userrs);
        return userrs;
    }
}
console.log(signUp(userrs, products));

//b.Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación

function signIn(username, password) {

    if (username === 'usuario' && password === 'contraseña') {
        console.log('Inicio de sesión exitoso');

    } else {
        console.log('Nombre de usuario o contraseña incorrectos');

    }
}
console.log(signIn(username, password));

//3.El array de productos tiene tres elementos y cada uno de ellos tiene seis propiedades. a. Crear una función llamada rateProduct que califique el producto b. Crear una función llamada averageRating que calcule la valoración media de un producto

let productss = [
    { id: 1, name: 'Producto 1', price: 10.99, rating: [], totalRating: 0, averageRating: 0 },
    { id: 2, name: 'Producto 2', price: 24.99, rating: [], totalRating: 0, averageRating: 0 },
    { id: 3, name: 'Producto 3', price: 49.99, rating: [], totalRating: 0, averageRating: 0 }
];
function rateProduct(productId, rating) {
    let product = products.find(product => product.id === productId);
    if (product) {
        product.rating.push(rating);
        product.totalRating += rating;
        product.averageRating = product.totalRating / product.rating.length;
        console.log(`Producto ${product.id} calificado con éxito`);
    } else {
        console.log(`Producto ${productId} no encontrado`);
    }
}
function averageRating(productId) {
    let product = products.find(product => product.id === productId);
    if (product) {
        console.log(`La valoración media del producto ${product.id} es ${product.averageRating}`);
    } else {
        console.log(`Producto ${productId} no encontrado`);
    }
}

//4.Crear una función llamada likeProduct. Esta función ayuda a dar un like al producto. Si no le gusta eliminar el like y si le gusta darle like

function likeProduct(product, liked) {
    if (liked) {

        if (product.likes.includes(usee)) {
            const index = product.likes.indexOf(usee);
            product.likes.splice(index, 1);
            console.log(`Dislike al producto "${product.name}"`);
        } else {

            product.likes.push(user);
            console.log(`Like al producto "${product.name}"`);
        }
    } else {

        if (product.likes.includes(user)) {
            const index = product.likes.indexOf(usee);
            product.likes.splice(index, 1);
            console.log(`Dislike al producto "${product.name}"`);
        } else {
            console.log(`No te gusta el producto "${product.name}"`);
        }
    }
}





















