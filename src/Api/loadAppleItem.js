import { appleApiURL } from "./values";

export const loadAppleItem = async (id) => {
    const res = await fetch(`${appleApiURL}${id}/`);
    const data = await res.json();
    return data
}
