export interface Ingredients {
    id: string,
    name: string,
    quantity: number
}

export interface Instructions {
    id: string,
    name: string,
    description: string,
    ingredients: Array<Ingredients>
    time: number
}

export interface Recipe {
    id: string,
    name: string,
    ingredients: Array<Ingredients>,
    instructions: Array<Instructions>
}