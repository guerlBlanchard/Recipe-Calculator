export interface Ingredients {
    name: string,
    price: number,
}

export interface Instructions {
    name: string,
    description: string,
    ingredients: Array<Ingredients>,
    time: number
}

export interface Recipe {
    name: string,
    ingredients: Array<readonly [Ingredients, number]>,
    instructions: Array<Instructions>
}

export class newIngredient {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}

export class newInstruction {
    name: string;
    description: string;
    ingredients: Array<Ingredients>;
    time: number;

    constructor(name: string, description: string, ingredients: Array<Ingredients>, time: number) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.time = time;
    }
} 

export class newRecipe {
    name: string;
    ingredients: Array<Ingredients>;
    instructions: Array<Instructions>;

    constructor(name: string, ingredients: Array<Ingredients>, instructions: Array<Instructions>) {
        this.name = name;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
}