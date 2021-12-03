function notJanice(guests) {
    const filteredGuests = [];

    for(const name of guests) {
        if(!name.startsWith("Janice")) {
            filteredGuests.push(name);
        }
    }

    return filteredGuests;
}

notJanice(["Bolin E", "Mako F", "Janice J", "Korra A", "Janice L", "Iroh F"])