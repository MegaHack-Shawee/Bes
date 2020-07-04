class Menus {
    menus = [
        {
            id: 1,
            items: [
                {
                    id: '1',
                    name: 'pizza',
                    description: 'calabresa com cebola',
                    price: '50,00',
                },
                {
                    id: '2',
                    name: 'petiscos',
                    description: 'calabresa, frango, carne, azeitona',
                    price: '35,00',
                },
                {
                    id: '3',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
                {
                    id: '4',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
                {
                    id: '5',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
            ],
        },
        {
            id: 2,
            items: [
                {
                    id: '1',
                    name: 'pizza',
                    description: 'calabresa com cebola',
                    price: '50,00',
                },
                {
                    id: '2',
                    name: 'petiscos',
                    description: 'calabresa, frango, carne, azeitona',
                    price: '35,00',
                },
                {
                    id: '3',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
                {
                    id: '4',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
                {
                    id: '5',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
            ],
        },
        {
            id: 3,
            items: [
                {
                    id: '1',
                    name: 'pizza',
                    description: 'calabresa com cebola',
                    price: '50,00',
                },
                {
                    id: '2',
                    name: 'petiscos',
                    description: 'calabresa, frango, carne, azeitona',
                    price: '35,00',
                },
                {
                    id: '3',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
                {
                    id: '4',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
                {
                    id: '5',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
            ],
        },
        {
            id: 4,
            items: [
                {
                    id: '1',
                    name: 'pizza',
                    description: 'calabresa com cebola',
                    price: '50,00',
                },
                {
                    id: '2',
                    name: 'petiscos',
                    description: 'calabresa, frango, carne, azeitona',
                    price: '35,00',
                },
                {
                    id: '3',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
                {
                    id: '4',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
                {
                    id: '5',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
            ],
        },
        {
            id: 5,
            items: [
                {
                    id: '1',
                    name: 'pizza',
                    description: 'calabresa com cebola',
                    price: '50,00',
                },
                {
                    id: '2',
                    name: 'petiscos',
                    description: 'calabresa, frango, carne, azeitona',
                    price: '35,00',
                },
                {
                    id: '3',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
                {
                    id: '4',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
                {
                    id: '5',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
            ],
        },
        {
            id: 6,
            items: [
                {
                    id: '1',
                    name: 'pizza',
                    description: 'calabresa com cebola',
                    price: '50,00',
                },
                {
                    id: '2',
                    name: 'petiscos',
                    description: 'calabresa, frango, carne, azeitona',
                    price: '35,00',
                },
                {
                    id: '3',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
                {
                    id: '4',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
                {
                    id: '5',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72,00',
                },
            ],
        },
    ];

    getMenuById(id) {
        return this.menus.filter(menu => String(menu.id) === String(id));
    }
}

export default new Menus();
