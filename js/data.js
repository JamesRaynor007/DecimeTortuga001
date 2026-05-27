const products = [
    {
        "id": 1,
        "name": "Bozal Chico-Mediano-grande1",
        "category": "accessories",
        "subcategory": "clothing",
        "price": 13.99,
        "image": "images/Bozal Chico-Mediano-grande1.jpg"
    },
    {
        "id": 2,
        "name": "Caja y Pala Gato",
        "category": "accessories",
        "subcategory": "grooming",
        "price": 12.99,
        "image": "images/Caja y Pala Gato.jpg"
    },
    {
        "id": 3,
        "name": "Cat - Adults - Gatti x 15kg",
        "category": "cats",
        "subcategory": "adults",
        "price": 54.99,
        "image": "images/Cat - Adults - Gatti x 15kg.jpg"
    },
    {
        "id": 4,
        "name": "Cat - Adults - Optimum x 3kg",
        "category": "cats",
        "subcategory": "adults",
        "price": 44.99,
        "image": "images/Cat - Adults - Optimum x 3kg.jpg"
    },
    {
        "id": 5,
        "name": "Cat - Adults - ProPlan Urinary x 15kg",
        "category": "cats",
        "subcategory": "adults",
        "price": 28.99,
        "image": "images/Cat - Adults - ProPlan Urinary x 15kg.jpg"
    },
    {
        "id": 6,
        "name": "Cat - Adults - Voraz x 15 kg",
        "category": "cats",
        "subcategory": "adults",
        "price": 32.99,
        "image": "images/Cat - Adults - Voraz x 15 kg.jpg"
    },
    {
        "id": 7,
        "name": "Cat - Agility x 10kg",
        "category": "cats",
        "subcategory": "adults",
        "price": 53.99,
        "image": "images/Cat - Agility x 10kg.jpg"
    },
    {
        "id": 8,
        "name": "Cat - Puppy - Excellent x7.5 kg",
        "category": "cats",
        "subcategory": "puppies",
        "price": 16.99,
        "image": "images/Cat - Puppy - Excellent x7.5 kg.jpg"
    },
    {
        "id": 9,
        "name": "Cat - Raza x1kg",
        "category": "cats",
        "subcategory": "adults",
        "price": 20.99,
        "image": "images/Cat - Raza x1kg.jpg"
    },
    {
        "id": 10,
        "name": "Collares",
        "category": "accessories",
        "subcategory": "clothing",
        "price": 11.99,
        "image": "images/Collares.jpg"
    },
    {
        "id": 11,
        "name": "Comedero acero 1",
        "category": "accessories",
        "subcategory": "clothing",
        "price": 19.99,
        "image": "images/Comedero acero 1.jpg"
    },
    {
        "id": 12,
        "name": "Correa y Pretal 1",
        "category": "accessories",
        "subcategory": "clothing",
        "price": 14.99,
        "image": "images/Correa y Pretal 1.jpg"
    },
    {
        "id": 13,
        "name": "Cucha perro 1",
        "category": "accessories",
        "subcategory": "travel",
        "price": 34.99,
        "image": "images/Cucha perro 1.jpg"
    },
    {
        "id": 14,
        "name": "Cucha perro 2",
        "category": "accessories",
        "subcategory": "travel",
        "price": 19.99,
        "image": "images/Cucha perro 2.jpg"
    },
    {
        "id": 15,
        "name": "Dog - Adults - Agility x 20kg",
        "category": "dogs",
        "subcategory": "adults",
        "price": 29.99,
        "image": "images/Dog - Adults - Agility x 20kg.jpg"
    },
    {
        "id": 16,
        "name": "Dog - Adults - Caudillo x 22kg",
        "category": "dogs",
        "subcategory": "adults",
        "price": 33.99,
        "image": "images/Dog - Adults - Caudillo x 22kg.jpg"
    },
    {
        "id": 17,
        "name": "Dog - Adults - Crianza x 15 kg",
        "category": "dogs",
        "subcategory": "adults",
        "price": 19.99,
        "image": "images/Dog - Adults - Crianza x 15 kg.jpg"
    },
    {
        "id": 18,
        "name": "Dog - Adults - Dog Selection x 21kg",
        "category": "dogs",
        "subcategory": "adults",
        "price": 44.99,
        "image": "images/Dog - Adults - Dog Selection x 21kg.jpg"
    },
    {
        "id": 19,
        "name": "Dog - Adults - Dogui x 21kg",
        "category": "dogs",
        "subcategory": "adults",
        "price": 55.99,
        "image": "images/Dog - Adults - Dogui x 21kg.jpg"
    },
    {
        "id": 20,
        "name": "Dog - Adults - Medium - Eukanuba x 15kg",
        "category": "dogs",
        "subcategory": "adults",
        "price": 19.99,
        "image": "images/Dog - Adults - Medium - Eukanuba x 15kg.jpg"
    },
    {
        "id": 21,
        "name": "Dog - Adults - Pedigree x 7.5kg",
        "category": "dogs",
        "subcategory": "adults",
        "price": 17.99,
        "image": "images/Dog - Adults - Pedigree x 7.5kg.jpg"
    },
    {
        "id": 22,
        "name": "Dog - Adults - Performance x 18 kg",
        "category": "dogs",
        "subcategory": "adults",
        "price": 52.99,
        "image": "images/Dog - Adults - Performance x 18 kg.jpg"
    },
    {
        "id": 23,
        "name": "Dog - Adults - Purina Pro Plan x 7.5 kg",
        "category": "dogs",
        "subcategory": "adults",
        "price": 53.99,
        "image": "images/Dog - Adults - Purina Pro Plan x 7.5 kg.jpg"
    },
    {
        "id": 24,
        "name": "Dog - Can Feed x 20kg",
        "category": "dogs",
        "subcategory": "adults",
        "price": 17.99,
        "image": "images/Dog - Can Feed x 20kg.jpg"
    },
    {
        "id": 25,
        "name": "Dog - Puppy - Dogui x 21kg",
        "category": "dogs",
        "subcategory": "puppies",
        "price": 54.99,
        "image": "images/Dog - Puppy - Dogui x 21kg.jpg"
    },
    {
        "id": 26,
        "name": "Dog - Puppy - UltraPro x 15kg",
        "category": "dogs",
        "subcategory": "puppies",
        "price": 49.99,
        "image": "images/Dog - Puppy - UltraPro x 15kg.jpg"
    },
    {
        "id": 27,
        "name": "Dog - Small - Dog Selection x 15kg",
        "category": "dogs",
        "subcategory": "small-breeds",
        "price": 55.99,
        "image": "images/Dog - Small - Dog Selection x 15kg.jpg"
    },
    {
        "id": 28,
        "name": "Gato Piedras x 4kg",
        "category": "accessories",
        "subcategory": "grooming",
        "price": 39.99,
        "image": "images/Gato Piedras x 4kg.jpg"
    },
    {
        "id": 29,
        "name": "Gato Piedras2",
        "category": "accessories",
        "subcategory": "grooming",
        "price": 20.99,
        "image": "images/Gato Piedras2.jpg"
    },
    {
        "id": 30,
        "name": "Huesos 1",
        "category": "accessories",
        "subcategory": "toys",
        "price": 52.99,
        "image": "images/Huesos 1.jpg"
    },
    {
        "id": 31,
        "name": "Huesos 2",
        "category": "accessories",
        "subcategory": "toys",
        "price": 58.99,
        "image": "images/Huesos 2.jpg"
    },
    {
        "id": 32,
        "name": "Juguete 1",
        "category": "accessories",
        "subcategory": "toys",
        "price": 33.99,
        "image": "images/Juguete 1.jpg"
    },
    {
        "id": 33,
        "name": "Juguete 2",
        "category": "accessories",
        "subcategory": "toys",
        "price": 37.99,
        "image": "images/Juguete 2.jpg"
    },
    {
        "id": 34,
        "name": "Juguete 3",
        "category": "accessories",
        "subcategory": "toys",
        "price": 45.99,
        "image": "images/Juguete 3.jpg"
    },
    {
        "id": 35,
        "name": "Juguete 4",
        "category": "accessories",
        "subcategory": "toys",
        "price": 49.99,
        "image": "images/Juguete 4.jpg"
    },
    {
        "id": 36,
        "name": "Juguete 5",
        "category": "accessories",
        "subcategory": "toys",
        "price": 46.99,
        "image": "images/Juguete 5.jpg"
    },
    {
        "id": 37,
        "name": "Kit Gato",
        "category": "cats",
        "subcategory": "adults",
        "price": 14.99,
        "image": "images/Kit Gato.jpg"
    },
    {
        "id": 38,
        "name": "Litera Gato 1",
        "category": "accessories",
        "subcategory": "grooming",
        "price": 26.99,
        "image": "images/Litera Gato 1.jpg"
    },
    {
        "id": 39,
        "name": "Litera Gato 2",
        "category": "accessories",
        "subcategory": "grooming",
        "price": 20.99,
        "image": "images/Litera Gato 2.jpg"
    },
    {
        "id": 40,
        "name": "Medalla1",
        "category": "accessories",
        "subcategory": "clothing",
        "price": 18.99,
        "image": "images/Medalla1.jpg"
    },
    {
        "id": 41,
        "name": "Pecera 1",
        "category": "other",
        "subcategory": "habitats",
        "price": 41.99,
        "image": "images/Pecera 1.jpg"
    },
    {
        "id": 42,
        "name": "Pelota1",
        "category": "accessories",
        "subcategory": "toys",
        "price": 31.99,
        "image": "images/Pelota1.jpg"
    },
    {
        "id": 43,
        "name": "Rascador Gatos 1",
        "category": "accessories",
        "subcategory": "toys",
        "price": 31.99,
        "image": "images/Rascador Gatos 1.jpg"
    },
    {
        "id": 44,
        "name": "Rascador Gatos 2",
        "category": "accessories",
        "subcategory": "toys",
        "price": 41.99,
        "image": "images/Rascador Gatos 2.jpg"
    },
    {
        "id": 45,
        "name": "Rascador Gatos 3",
        "category": "accessories",
        "subcategory": "toys",
        "price": 45.99,
        "image": "images/Rascador Gatos 3.jpg"
    },
    {
        "id": 46,
        "name": "Shampoo 2",
        "category": "accessories",
        "subcategory": "grooming",
        "price": 50.99,
        "image": "images/Shampoo 2.jpg"
    },
    {
        "id": 47,
        "name": "Shampoo 3",
        "category": "accessories",
        "subcategory": "grooming",
        "price": 39.99,
        "image": "images/Shampoo 3.jpg"
    },
    {
        "id": 48,
        "name": "Shampoo 4",
        "category": "accessories",
        "subcategory": "grooming",
        "price": 46.99,
        "image": "images/Shampoo 4.jpg"
    },
    {
        "id": 49,
        "name": "Shampoo Botanico 1",
        "category": "accessories",
        "subcategory": "grooming",
        "price": 13.99,
        "image": "images/Shampoo Botanico 1.jpg"
    }
];