export function staff1() {
    return {
        member: {
            id: 1,
            first_name: "Tony",
            last_name: "Selznick",
            email: "tony@msaagency.com",
            position: "Founder",
            biography: null,
            location: "Los Angeles",
            department: "Choregraphy",
            gender: "male",
            slug: "tony.selznick",
            order: 0
        }
    };
};

export function staffMembers1() {
    return [
        {
            first_name: "Tony",
            last_name: "Selznick",
            full_name: "Tony Selznick",
            email: "tony@msaagency.com",
            position: "Founder / Senior Agent",
            biography: null,
            location: "Los Angeles, New York",
            department: "Choregraphy",
            gender: "male",
            slug: "tonyselznick",
            order: 0
        },
        {
            first_name: "Allan",
            last_name: "Cutler",
            full_name: "Allan Cutler",
            email: "iamcutler@icloud.com",
            position: "Software Engineer",
            biography: null,
            location: "Los Angeles",
            department: "IT",
            gender: "male",
            slug: "iamcutler",
            order: 1
        }
    ];
};
