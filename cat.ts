class Cat {
    name: string;
    private age: number;
    breed: string;

    constructor(name: string, age: number, breed: string) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    getAge(): number {
        return this.age;
    }

    setAge(newAge: number): void {
        if (newAge >= 0 && newAge <= 30) {
            this.age = newAge;
        } else {
            console.log("Ошибка: возраст кошки должен быть от 0 до 30 лет");
        }
    }

    getInfo(): string {
        return `Кошка: ${this.name}, возраст: ${this.age} лет, порода: ${this.breed}`;
    }
}

const cat = new Cat("Мурка", 3, "Сиамская");

console.log(cat.getInfo());
console.log(cat.getAge());

cat.setAge(5);
console.log(cat.getAge());

cat.setAge(100);
