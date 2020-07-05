import petisco from '../assets/images/petisco.jpg';
import pizza from '../assets/images/pizza.jpg';
import longneck from '../assets/images/longneck.jpg';

class Menus {
    menus = [
        {
            id: '1',
            items: [
                {
                    id: '1',
                    name: 'pizza',
                    description: 'calabresa com cebola',
                    price: '50.00',
                    photo: pizza,
                },
                {
                    id: '2',
                    name: 'petiscos',
                    description: 'calabresa, frango, carne, azeitona',
                    price: '35.00',
                    photo: petisco,
                },
                {
                    id: '3',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
                {
                    id: '4',
                    name: 'Combo long neck 6un',
                    description: 'skol, skol ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
                {
                    id: '5',
                    name: 'Combo long neck 6un',
                    description: 'skol, antarctica ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
            ],
        },
        {
            id: '2',
            items: [
                {
                    id: '1',
                    name: 'pizza',
                    description: 'calabresa com cebola',
                    price: '50.00',
                    photo: pizza,
                },
                {
                    id: '2',
                    name: 'petiscos',
                    description: 'calabresa, frango, carne, azeitona',
                    price: '35.00',
                    photo: petisco,
                },
                {
                    id: '3',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
                {
                    id: '4',
                    name: 'Combo long neck 6un',
                    description: 'skol, skol ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
                {
                    id: '5',
                    name: 'Combo long neck 6un',
                    description: 'skol, antarctica ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
            ],
        },
        {
            id: '3',
            items: [
                {
                    id: '1',
                    name: 'pizza',
                    description: 'calabresa com cebola',
                    price: '50.00',
                    photo: pizza,
                },
                {
                    id: '2',
                    name: 'petiscos',
                    description: 'calabresa, frango, carne, azeitona',
                    price: '35.00',
                    photo: petisco,
                },
                {
                    id: '3',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
                {
                    id: '4',
                    name: 'Combo long neck 6un',
                    description: 'skol, skol ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
                {
                    id: '5',
                    name: 'Combo long neck 6un',
                    description: 'skol, antarctica ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
            ],
        },
        {
            id: '4',
            items: [
                {
                    id: '1',
                    name: 'pizza',
                    description: 'calabresa com cebola',
                    price: '50.00',
                    photo: pizza,
                },
                {
                    id: '2',
                    name: 'petiscos',
                    description: 'calabresa, frango, carne, azeitona',
                    price: '35.00',
                    photo: petisco,
                },
                {
                    id: '3',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
                {
                    id: '4',
                    name: 'Combo long neck 6un',
                    description: 'skol, skol ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
                {
                    id: '5',
                    name: 'Combo long neck 6un',
                    description: 'skol, antarctica ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
            ],
        },
        {
            id: '5',
            items: [
                {
                    id: '1',
                    name: 'pizza',
                    description: 'calabresa com cebola',
                    price: '50.00',
                    photo: pizza,
                },
                {
                    id: '2',
                    name: 'petiscos',
                    description: 'calabresa, frango, carne, azeitona',
                    price: '35.00',
                    photo: petisco,
                },
                {
                    id: '3',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
                {
                    id: '4',
                    name: 'Combo long neck 6un',
                    description: 'skol, skol ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
                {
                    id: '5',
                    name: 'Combo long neck 6un',
                    description: 'skol, antarctica ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
            ],
        },
        {
            id: '6',
            items: [
                {
                    id: '1',
                    name: 'pizza',
                    description: 'calabresa com cebola',
                    price: '50.00',
                    photo: pizza,
                },
                {
                    id: '2',
                    name: 'petiscos',
                    description: 'calabresa, frango, carne, azeitona',
                    price: '35.00',
                    photo: petisco,
                },
                {
                    id: '3',
                    name: 'Combo long neck 6un',
                    description: 'skol, brahma ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
                {
                    id: '4',
                    name: 'Combo long neck 6un',
                    description: 'skol, skol ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
                {
                    id: '5',
                    name: 'Combo long neck 6un',
                    description: 'skol, antarctica ou antarctica',
                    price: '72.00',
                    photo: longneck,
                },
            ],
        },
    ];

    getMenuById(id) {
        return this.menus.filter(menu => String(menu.id) === String(id));
    }

    getMenus() {
        var menussList = [];
        this.menus.map(menu => {
            menussList.push(menu.items);
        });
        console.warn(menussList);

        return menussList;
    }
}

export default new Menus();
