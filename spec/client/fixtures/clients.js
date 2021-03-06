export function client1() {
    return {
        id: 1,
        first_name: "Napolean and Tabitha",
        last_name: "Dumo",
        full_name: "Napolean and Tabitha Dumo",
        title: "Creative Directors / Choreographers",
        biography: "Napoleon and Tabitha are world-renowned choreographer/directors best known for their Emmy Award winning work on the FOX hit television show So You Think You Can Dance.\n\nThe duo, also known as Nappytabs, were an integral part in the success of MTV's America's Best Dance Crew. Currently they are serving as Performance Producers and Choreographers on ABC's new show, Sing Your Face Off. The team has also worked with such icons as Jennifer Lopez, Madonna, Carrie Underwood, Prince, Will I Am, 50 Cent, Nicki Minaj, and Christina Aguilera. In addition, they have choreographed Cirque du Soleil shows, Beatles LOVE and MJ Immortal.",
        slug: "nappytabs",
        location: "Los Angeles",
        social: {
            website: "http://shop.nappytabs.com",
            facebook: "http://www.facebook.com/pages/Napoleon-and-Tabitha-DUmo/30389811702",
            twitter: "http://twitter.com/nappytabs",
            instagram: 'http://instagram.com/nappytabs',
            youtube: "http://www.youtube.com/user/Nappytabs"
        },
        resume_order: [
            {"category":"corporate","order":1},
            {"category":"award_show","order":2},
            {"category":"misc","order":3},
            {"category":"film","order":4},
            {"category":"music_video","order":5},
            {"category":"event","order":6},
            {"category":"television","order":7},
            {"category":"commercial","order":8}
        ],
        resume: {
            commercial: [
                { company: null, credit: "JLO / Iconol ", id: 1183059, project: "Loreal" }
            ]
        }
    };
}

/**
 * Client collection with categories
 */
export function ClientCollectionWithCategories1() {
    return [
        {id: 1, first_name: "John", last_name: "Doe", full_name: "John Doe", title: "N/A", biography: "TEST", slug: "johndoe", location: "Los Angeles", categories: ["educator"] },
        {id: 2, first_name: "John", last_name: "Doe", full_name: "John Doe", title: "N/A", biography: "TEST", slug: "johndoe", location: "Los Angeles", categories: ["choreography", "educator"] },
        {id: 3, first_name: "John", last_name: "Doe", full_name: "John Doe", title: "N/A", biography: "TEST", slug: "johndoe", location: "Los Angeles", categories: ["live_production"] },
        {id: 4, first_name: "John", last_name: "Doe", full_name: "John Doe", title: "N/A", biography: "TEST", slug: "johndoe", location: "Los Angeles", categories: ["stage_director"] },
        {id: 5, first_name: "John", last_name: "Doe", full_name: "John Doe", title: "N/A", biography: "TEST", slug: "johndoe", location: "Los Angeles", categories: ["creative_director"] },
        {id: 6, first_name: "John", last_name: "Doe", full_name: "John Doe", title: "N/A", biography: "TEST", slug: "johndoe", location: "Los Angeles", categories: ["educator"] },
    ];
}

export const clientSocial1 = {
    id: 1,
    first_name: "Napolean and Tabitha",
    last_name: "Dumo",
    full_name: "Napolean and Tabitha Dumo",
    title: "Creative Directors / Choreographers",
    biography: "Napoleon and Tabitha are world-renowned choreographer/directors best known for their Emmy Award winning work on the FOX hit television show So You Think You Can Dance.\n\nThe duo, also known as Nappytabs, were an integral part in the success of MTV's America's Best Dance Crew. Currently they are serving as Performance Producers and Choreographers on ABC's new show, Sing Your Face Off. The team has also worked with such icons as Jennifer Lopez, Madonna, Carrie Underwood, Prince, Will I Am, 50 Cent, Nicki Minaj, and Christina Aguilera. In addition, they have choreographed Cirque du Soleil shows, Beatles LOVE and MJ Immortal.",
    slug: "nappytabs",
    location: "Los Angeles",
    social: {
        website: "http://shop.nappytabs.com",
        facebook: "http://www.facebook.com/pages/Napoleon-and-Tabitha-DUmo/30389811702",
        twitter: "http://twitter.com/nappytabs",
        instagram: 'http://instagram.com/nappytabs',
        youtube: "http://www.youtube.com/user/Nappytabs",
        stats: {
            twitter: 0,
            instagram: 0,
            youtube: 0
        }
    },
    resume_order: [
        {"category":"corporate","order":1},
        {"category":"award_show","order":2},
        {"category":"misc","order":3},
        {"category":"film","order":4},
        {"category":"music_video","order":5},
        {"category":"event","order":6},
        {"category":"television","order":7},
        {"category":"commercial","order":8}
    ],
    resume: {
        commercial: [
            { company: null, credit: "JLO / Iconol ", id: 1183059, project: "Loreal" }
        ]
    }
};

export const clientSocial2 = {
    id: 2,
    first_name: "Napolean and Tabitha",
    last_name: "Dumo",
    full_name: "Napolean and Tabitha Dumo",
    title: "Creative Directors / Choreographers",
    biography: "Napoleon and Tabitha are world-renowned choreographer/directors best known for their Emmy Award winning work on the FOX hit television show So You Think You Can Dance.\n\nThe duo, also known as Nappytabs, were an integral part in the success of MTV's America's Best Dance Crew. Currently they are serving as Performance Producers and Choreographers on ABC's new show, Sing Your Face Off. The team has also worked with such icons as Jennifer Lopez, Madonna, Carrie Underwood, Prince, Will I Am, 50 Cent, Nicki Minaj, and Christina Aguilera. In addition, they have choreographed Cirque du Soleil shows, Beatles LOVE and MJ Immortal.",
    slug: "nappytabs",
    location: "Los Angeles",
    social: {
        website: "http://shop.nappytabs.com",
        facebook: "http://www.facebook.com/pages/Napoleon-and-Tabitha-DUmo/30389811702",
        twitter: "http://twitter.com/nappytabs",
        instagram: 'http://instagram.com/nappytabs',
        youtube: "http://www.youtube.com/user/Nappytabs",
        stats: {
            twitter: 1000,
            instagram: 100,
            youtube: 0
        }
    },
    resume_order: [
        {"category":"corporate","order":1},
        {"category":"award_show","order":2},
        {"category":"misc","order":3},
        {"category":"film","order":4},
        {"category":"music_video","order":5},
        {"category":"event","order":6},
        {"category":"television","order":7},
        {"category":"commercial","order":8}
    ],
    resume: {
        commercial: [
            { company: null, credit: "JLO / Iconol ", id: 1183059, project: "Loreal" }
        ]
    }
};

export const clientSocial3 = {
    id: 3,
    first_name: "Napolean and Tabitha",
    last_name: "Dumo",
    full_name: "Napolean and Tabitha Dumo",
    title: "Creative Directors / Choreographers",
    biography: "Napoleon and Tabitha are world-renowned choreographer/directors best known for their Emmy Award winning work on the FOX hit television show So You Think You Can Dance.\n\nThe duo, also known as Nappytabs, were an integral part in the success of MTV's America's Best Dance Crew. Currently they are serving as Performance Producers and Choreographers on ABC's new show, Sing Your Face Off. The team has also worked with such icons as Jennifer Lopez, Madonna, Carrie Underwood, Prince, Will I Am, 50 Cent, Nicki Minaj, and Christina Aguilera. In addition, they have choreographed Cirque du Soleil shows, Beatles LOVE and MJ Immortal.",
    slug: "nappytabs",
    location: "Los Angeles",
    social: {
        website: "http://shop.nappytabs.com",
        facebook: "http://www.facebook.com/pages/Napoleon-and-Tabitha-DUmo/30389811702",
        twitter: "http://twitter.com/nappytabs",
        instagram: 'http://instagram.com/nappytabs',
        youtube: "http://www.youtube.com/user/Nappytabs",
        stats: {
            twitter: 1000,
            instagram: 1000,
            youtube: 1000
        }
    },
    resume_order: [
        {"category":"corporate","order":1},
        {"category":"award_show","order":2},
        {"category":"misc","order":3},
        {"category":"film","order":4},
        {"category":"music_video","order":5},
        {"category":"event","order":6},
        {"category":"television","order":7},
        {"category":"commercial","order":8}
    ],
    resume: {
        commercial: [
            { company: null, credit: "JLO / Iconol ", id: 1183059, project: "Loreal" }
        ]
    }
};
