import {
    writable
} from "svelte/store";

const professionalSkills = writable([{
        id: 1,
        name: 'Python'
    },
    {
        id: 2,
        name: 'Web Devs'
    },
    {
        id: 3,
        name: 'Flutter'
    }
]);
export default professionalSkills;