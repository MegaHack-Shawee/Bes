class Places {
    places = [
        {
            id: '1',
            name: 'football bar',
            street: 'Av. Paulista',
            number: '1027',
            distance: '7.8 km',
            zipcode: '22970000',
        },
        {
            id: '2',
            name: 'Bar & lanchonete dos amigos',
            street: 'Av. Paulista',
            number: '1900',
            distance: '11.2 km',
            zipcode: '22970000',
        },
        {
            id: '3',
            name: 'Fulanos bar',
            street: 'Rua augusta',
            number: '1027',
            distance: '7.8 km',
            zipcode: '25075100',
        },
        {
            id: '4',
            name: 'Beltranos bar & lanchonete',
            street: 'Av. Nossa senhora de Copacabana',
            number: '7120',
            distance: '25.2 km',
            zipcode: '3782090',
        },
        {
            id: '5',
            name: 'Churrascaria do foguinho',
            street: 'Rua Barata Ribeiro',
            number: '1200',
            distance: '2.8 km',
            zipcode: '56750100',
        },
        {
            id: '6',
            name: 'Restaurante Kilomania',
            street: 'Rua Oscar clark',
            number: '533',
            distance: '19.0 km',
            zipcode: '4577050',
        },
    ];

    getPlaces() {
        return this.places;
    }

    getPlacesByStreetOrZipcode(filter) {
        return this.places.filter(
            place =>
                place.street.toUpperCase() === filter.toUpperCase() ||
                place.zipcode.toUpperCase() === filter.toUpperCase(),
        );
    }

    getPlacesByName(filter) {
        return this.places.filter(
            place => place.name.toUpperCase() === filter.toUpperCase(),
        );
    }

    addPlace(place) {
        this.places.push(place);
    }
}

export default new Places();
