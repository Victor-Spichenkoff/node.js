interface Product {
    nome: string
    preco: number
}

const data:Product[] = [
    { nome: 'Banana', preco: 10 },
    { nome: 'Caminhão', preco: 120 }
]

export const Product = {
    getAll: () => {
        return data
    }
}