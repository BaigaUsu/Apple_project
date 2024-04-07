export function route(item) {
     if (item.category === 'Mac') {
        return `/Mac/${item.id}`;
    } else if (item.category === 'iPad') {
        return `/Ipad/${item.id}`;
    } else if (item.category === 'iMac') {
        return `/Mac/${item.id}`;
    } else if (item.category === 'Watch') {
        return `/Watch/${item.id}`;
    } else if (item.category === 'AirPods') {
        return `/AirPods/${item.id}`;
    } else if (item.category === 'Gadgets') {
        return `/Gadgets/${item.id}`;
    } else if (item.category === 'Accessories') {
        return `/Accessories/${item.id}`;
    } else {
        return `/ItemIphone/${item.id}`;
    }
}
