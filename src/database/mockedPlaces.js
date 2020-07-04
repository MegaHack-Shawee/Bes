class Places {
    places = [
        {
            id: '1',
            name: 'Fulanos bar',
            street: 'Av. Paulista',
            number: '1027',
            distance: '7.8 km',
        },
        {
            id: '2',
            name: 'Beltranos bar & lanchonete',
            street: 'Av. Paulista',
            number: '1900',
            distance: '11.2 km',
        },
    ];

    getPlaces() {
        return this.places;
    }

    addPlace(place) {
        this.places.push(place);
    }
}

export default new Places();
