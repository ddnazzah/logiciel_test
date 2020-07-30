import uuid from "uuid/v1";

export const schools = [
    {
        id: uuid(),
        name: "Kwame Nkrumah University of Science and Technology",
        school_type: "Tertiary",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "University of Legon",
        school_type: "Tertiary",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "KNUST High School",
        school_type: "SHS",
        createdAt: 1555016400000
    }
];

export const programmes = [
    {
        id: uuid(),
        name: "General Science",
        level: "SHS",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "BSc. Human Resource",
        level: "Tertiary",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "BSc. Petroleum Engineering",
        level: "Tertiary",
        createdAt: 1555016400000
    }
];

export const levels = [
    {
        id: uuid(),
        name: "100",
        level: "Tertiary",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "200",
        level: "Tertiary",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "300",
        level: "Tertiary",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "400",
        level: "Tertiary",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Form One",
        level: "SHS",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Form Two",
        level: "SHS",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Form Three",
        level: "SHS",
        createdAt: 1555016400000
    }
];

export const cities = [
    {
        id: uuid(),
        name: "Kumasi",
        region: "Ashanti",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Accra",
        region: "Greater Accra",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Sunyani",
        region: "Brong Ahafo",
        createdAt: 1555016400000
    }
];

export const regions = [
    {
        id: uuid(),
        name: "Ashanti",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Greater Accra",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Brong Ahafo",
        createdAt: 1555016400000
    }
];

export const users = [
    {
        id: uuid(),
        name: "Ekaterina Tankova",
        email: "etankova@gmail.com",
        role: "Editor",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Alexa Richardson",
        email: "arichardson@gmail.com",
        createdAt: 1555016400000
    }
];

export const positions = [
    {
        id: uuid(),
        name: "President",
        level: "GHAMSU",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Head Pastor",
        level: "Mother Church",
        createdAt: 1555016400000
    }
];

export const professions = [
    {
        id: uuid(),
        name: "Engineer",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Social Worker",
        createdAt: 1555016400000
    }
];

export const diocese = [
    {
        id: uuid(),
        name: "Diocese One",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Diocese Two",
        createdAt: 1555016400000
    }
];

export const organizations = [
    {
        id: uuid(),
        name: "Organization One",
        diocese: "Diocese",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Organization Two",
        diocese: "Another Diocese",
        createdAt: 1555016400000
    }
];

export const circuits = [
    {
        id: uuid(),
        name: "Circuit One",
        organization: "Organization",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Circuits Two",
        organization: "Another Organization",
        createdAt: 1555016400000
    }
];

export const societies = [
    {
        id: uuid(),
        name: "Society One",
        circuit: "Circuit",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Society Two",
        circuit: "Another Circuit",
        createdAt: 1555016400000
    }
];

export const locals = [
    {
        id: uuid(),
        name: "Local One",
        society: "Society",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Local Two",
        society: "Another Society",
        createdAt: 1555016400000
    }
];

export default [
    {
        id: uuid(),
        name: "Ekaterina Tankova",
        address: {
            country: "USA",
            state: "West Virginia",
            city: "Parkersburg",
            street: "2849 Fulton Street"
        },
        email: "ekaterina.tankova@devias.io",
        phone: "304-428-3097",
        role: "Administrator",
        // avatarUrl: "/images/avatars/avatar_3.png",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Cao Yu",
        address: {
            country: "USA",
            state: "Bristow",
            city: "Iowa",
            street: "1865  Pleasant Hill Road"
        },
        email: "cao.yu@devias.io",
        // avatarUrl: "/images/avatars/avatar_4.png",
        phone: "712-351-5711",
        role: "Editor",
        createdAt: 1555016400000
    },
    {
        id: uuid(),
        name: "Alexa Richardson",
        address: {
            country: "USA",
            state: "Georgia",
            city: "Atlanta",
            street: "4894  Lakeland Park Drive"
        },
        email: "alexa.richardson@devias.io",
        phone: "770-635-2682",
        role: "Editor",
        // avatarUrl: "/images/avatars/avatar_2.png",
        createdAt: 1555016400000
    }
    // {
    //     id: uuid(),
    //     name: "Anje Keizer",
    //     address: {
    //         country: "USA",
    //         state: "Ohio",
    //         city: "Dover",
    //         street: "4158  Hedge Street"
    //     },
    //     email: "anje.keizer@devias.io",
    //     avatarUrl: "/images/avatars/avatar_5.png",
    //     phone: "908-691-3242",
    //     role: "Administrator",
    //     createdAt: 1554930000000
    // },
    // {
    //     id: uuid(),
    //     name: "Clarke Gillebert",
    //     address: {
    //         country: "USA",
    //         state: "Texas",
    //         city: "Dallas",
    //         street: "75247"
    //     },
    //     email: "clarke.gillebert@devias.io",
    //     phone: "972-333-4106",
    //     role: "Editor",
    //     avatarUrl: "/images/avatars/avatar_6.png",
    //     createdAt: 1554757200000
    // },
    // {
    //     id: uuid(),
    //     name: "Adam Denisov",
    //     address: {
    //         country: "USA",
    //         state: "California",
    //         city: "Bakerfield",
    //         street: "317 Angus Road"
    //     },
    //     email: "adam.denisov@devias.io",
    //     phone: "858-602-3409",
    //     role: "Administrator",
    //     avatarUrl: "/images/avatars/avatar_1.png",
    //     createdAt: 1554670800000
    // },
    // {
    //     id: uuid(),
    //     name: "Ava Gregoraci",
    //     address: {
    //         country: "USA",
    //         state: "California",
    //         city: "Redondo Beach",
    //         street: "2188  Armbrester Drive"
    //     },
    //     email: "ava.gregoraci@devias.io",
    //     avatarUrl: "/images/avatars/avatar_7.png",
    //     phone: "415-907-2647",
    //     role: "Editor",
    //     createdAt: 1554325200000
    // },
    // {
    //     id: uuid(),
    //     name: "Emilee Simchenko",
    //     address: {
    //         country: "USA",
    //         state: "Nevada",
    //         city: "Las Vegas",
    //         street: "1798  Hickory Ridge Drive"
    //     },
    //     email: "emilee.simchenko@devias.io",
    //     phone: "702-661-1654",
    //     role: "Administrator",
    //     avatarUrl: "/images/avatars/avatar_8.png",
    //     createdAt: 1523048400000
    // },
    // {
    //     id: uuid(),
    //     name: "Kwak Seong-Min",
    //     address: {
    //         country: "USA",
    //         state: "Michigan",
    //         city: "Detroit",
    //         street: "3934  Wildrose Lane"
    //     },
    //     email: "kwak.seong.min@devias.io",
    //     phone: "313-812-8947",
    //     role: "Administrator",
    //     avatarUrl: "/images/avatars/avatar_9.png",
    //     createdAt: 1523048400000
    // },
    // {
    //     id: uuid(),
    //     name: "Merrile Burgett",
    //     address: {
    //         country: "USA",
    //         state: "Utah",
    //         city: "Salt Lake City",
    //         street: "368 Lamberts Branch Road"
    //     },
    //     email: "merrile.burgett@devias.io",
    //     phone: "801-301-7894",
    //     role: "Editor",
    //     avatarUrl: "/images/avatars/avatar_10.png",
    //     createdAt: 1522702800000
    // }
];
