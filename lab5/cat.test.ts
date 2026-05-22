import { Cat } from './cat';

describe("Класс Cat", () => {
    it("должен создавать кошку с правильными данными", () => {
        const cat = new Cat("Мурка", 3, "Сиамская");
        expect(cat.name).toBe("Мурка");
        expect(cat.breed).toBe("Сиамская");
        expect(cat.getAge()).toBe(3);
    });

    it("должен корректно изменять возраст", () => {
        const cat = new Cat("Барсик", 2, "Дворовая");
        cat.setAge(5);
        expect(cat.getAge()).toBe(5);
    });

    it("не должен устанавливать возраст меньше 0", () => {
        const cat = new Cat("Мурка", 3, "Сиамская");
        const consoleSpy = jest.spyOn(console, 'log');
        cat.setAge(-5);
        expect(consoleSpy).toHaveBeenCalledWith("Ошибка: возраст кошки должен быть от 0 до 30 лет");
        expect(cat.getAge()).toBe(3);
    });

    it("не должен устанавливать возраст больше 30", () => {
        const cat = new Cat("Мурка", 3, "Сиамская");
        const consoleSpy = jest.spyOn(console, 'log');
        cat.setAge(100);
        expect(consoleSpy).toHaveBeenCalledWith("Ошибка: возраст кошки должен быть от 0 до 30 лет");
        expect(cat.getAge()).toBe(3);
    });

    it("должен возвращать правильную информацию", () => {
        const cat = new Cat("Мурка", 3, "Сиамская");
        expect(cat.getInfo()).toBe("Кошка: Мурка, возраст: 3 лет, порода: Сиамская");
    });
});
