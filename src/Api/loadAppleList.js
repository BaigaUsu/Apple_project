import { appleApiURL } from "./values";

export const loadAppleList = async () => {
        const res = await fetch(appleApiURL);
        const data = await res.json();
        return data
};

