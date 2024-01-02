export type Product = {
   id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string 
    
}

export const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 15 Pro',
        description: 'This is iPhone 15 Pro',
        type: 'phone',
        capacity: '128',
        price: 1000,
        image: '/images/iphone-black.webp' ,
        
    },
    {
        id: 2,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 1 Pro',
        type: 'phone',
        capacity: '128',
        price: 2000,
        image: '/images/iphone-blue.webp' ,
    },
    {
        id: 3,
        title: 'iPhone 5 ',
        description: 'This is iPhone 5 ',
        type: 'phone',
        capacity: '128',
        price: 10,
        image: '/images/iphone-green.webp' ,
    },
    {
        id: 4,
        title: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        type: 'phone',
        capacity: '128',
        price: 300,
        image: '/images/iphone-pink.webp' ,
    },
    {
        id: 5,
        title: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        type: 'phone',
        capacity: '128',
        price: 150,
        image: '/images/iphone-silwer.webp' ,
    },
    {
        id: 6,
        title: 'iPhone 10 ',
        description: 'This is iPhone 10',
        type: 'phone',
        capacity: '128',
        price: 200,
        image: '/images/iphone-white.webp' ,
    },
]
