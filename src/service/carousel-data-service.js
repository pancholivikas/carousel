export const carouselDataService = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    title: 'Dell Laptop',
                    price: 50000,
                    url: 'https://images.unsplash.com/photo-1531815288026-1946892d24df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80',
                    categories: ['laptop', 'electronics']
                },
                {
                    title: 'Apple Mac Book',
                    price: 70000,
                    url: 'https://images.unsplash.com/photo-1527792492728-08d07d011113?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
                    categories:  ['laptop', 'electronics']
                },
                {
                    title: 'HP Laptop',
                    price: 50000,
                    url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
                    categories: ['laptop', 'electronics']
                },
                {
                    title: 'Acer Laptop',
                    price: 50000,
                    url: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80',
                    categories: ['laptop', 'electronics']
                },
                {
                    title: 'iPhone x',
                    price: 70000,
                    url: 'https://images.unsplash.com/photo-1524293772845-840102eccb82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    categories:  ['mobile', 'electronics']
                },
                {
                    title: 'mi phone',
                    price: 10000,
                    url: 'https://images.unsplash.com/photo-1512063489294-0b53a27284b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    categories:  ['mobile', 'electronics']
                },
                {
                    title: 'one plus 7',
                    price: 10000,
                    url: 'https://images.unsplash.com/photo-1554332964-da8cd769eed1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
                    categories:  ['mobile', 'electronics']
                },
                {
                    title: 'iphone 8',
                    price: 50000,
                    url: 'https://images.unsplash.com/photo-1543947516-d55207244d19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                    categories:  ['mobile', 'electronics']
                },
                {
                    title: 'LG G6',
                    price: 30000,
                    url: 'https://images.unsplash.com/photo-1548782045-e9bc26302370?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    categories:  ['mobile', 'electronics']
                },
                {
                    title: 'Levis Jeans',
                    price: 1000,
                    url: 'https://images.unsplash.com/photo-1541840031508-326b77c9a17e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                    categories:  ['clothes', 'jeans']
                },
                {
                    title: 'pepe Jeans',
                    price: 1000,
                    url: 'https://images.unsplash.com/photo-1549577380-c76165562d10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                    categories:  ['clothes', 'jeans']
                },
                {
                    title: 'Lee Jeans',
                    price: 1000,
                    url: 'https://images.unsplash.com/photo-1549897380-2772a6d7179f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=890&q=80',
                    categories:  ['clothes', 'jeans']
                },
                {
                    title: 'Levis Shirt',
                    price: 1000,
                    url: 'https://images.unsplash.com/photo-1551789298-1c7b020e15ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=627&q=80',
                    categories:  ['clothes', 'Shirt']
                },
                {
                    title: 'Lee Shirt',
                    price: 1000,
                    url: 'https://images.unsplash.com/photo-1495064955155-9f2b086b2c4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    categories:  ['clothes', 'Shirt']
                },
                {
                    title: 'pepe Shirt',
                    price: 1000,
                    url: 'https://images.unsplash.com/photo-1497948408037-3f93f842fc5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    categories:  ['clothes', 'Shirt']
                }
            ])
        }, 500)
    })
}