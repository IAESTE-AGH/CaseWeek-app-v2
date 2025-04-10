import type { Workshop } from "@/@types/API"

export const WORKSHOPS_MOCKS: Workshop[] = [
    {
        id: "fe476267-6ba0-4a7f-bd9d-6250d6d8a28b",
        company: {
            id: "a32e9bf0-9f6c-4a42-9ec4-1a01459d3529",
            name: "Tech Solutions Inc.",
            logoUrl: "https://example.com/logo-tech-solutions.png",
            websiteUrl: "https://techsolutionsinc.com",
            shortDescription: "Tech Solutions Inc. is a leading provider of software solutions.",
            longDescription: "Tech Solutions Inc. specializes in developing innovative software products for various industries.",
            displayPriority: 1,
            published: true,
        },
        university: {
            id: "f73b51c8-924c-4963-8b3b-68cf7d8b847e",
            name: "University of Science and Technology",
        },
        title: "Introduction to Data Science Workshop",
        status: "PUBLISHED",
        startsAt: "2024-03-15T09:00:00Z",
        registrationEndsAt: "2024-03-10T23:59:59Z",
        shortDescription: "Learn the fundamentals of data science and its applications in real-world scenarios.",
        longDescription:
            "This workshop provides an introduction to data science, covering topics such as data analysis, machine learning, and data visualization. Participants will gain hands-on experience through practical exercises and case studies.",
        address: "123 Main Street, Cityville, USA",
        capacity: 30,
        durationMinutes: 180,
        emailTextCandidate:
            "Dear Participant,\n\nThank you for registering for the Introduction to Data Science Workshop. We look forward to seeing you on March 15th!\n\nBest regards,\nThe Tech Solutions Inc. Team",
        emailTextQualified:
            "Congratulations!\n\nYou have been selected to participate in the Introduction to Data Science Workshop. Please make sure to arrive on time and bring your laptop for the hands-on exercises.\n\nBest regards,\nThe Tech Solutions Inc. Team",
        minYearOfStudy: 2,
        maxYearOfStudy: 4,
        preferableFieldsOfStudy: [
            { id: "e5c57629-44b4-4f71-b1ee-cdaa0ffadab2", name: "Computer Science" },
            { id: "89399a6d-7156-4226-8b9a-ae39b3a6e2b6", name: "Statistics" },
        ],
        allFieldsOfStudyAccepted: false,
        archived: false,
        propositions: {
            id: ["d49b65b4-28c5-4310-8d5a-2f7fbd5c0a5e", "89089d1a-b4ac-4d45-bb8f-69a8d1d90d4c", "cde99e9a-8b72-4c8f-bc29-7e7cf456b890"],
        },
    },
    {
        id: "d49b65b4-28c5-4310-8d5a-2f7fbd5c0a5e",
        company: {
            id: "94a4d02a-59d2-45a3-9830-d3d928a3d89d",
            name: "Innovate Labs",
            logoUrl: "https://example.com/logo-innovate-labs.png",
            websiteUrl: "https://innovatelabs.io",
            shortDescription: "Innovate Labs is a research and development company.",
            longDescription: "Innovate Labs focuses on cutting-edge technologies and innovative solutions to solve complex problems.",
            displayPriority: 2,
            published: true,
        },
        university: {
            id: "7ae69b1e-dbd5-4ec9-843f-d41ff158456a",
            name: "City College",
        },
        title: "Machine Learning Workshop",
        status: "UNPUBLISHED",
        startsAt: "2024-04-10T10:00:00Z",
        registrationEndsAt: "2024-04-05T23:59:59Z",
        shortDescription: "Discover the principles of machine learning and its practical applications.",
        longDescription:
            "This workshop covers the fundamentals of machine learning, including supervised and unsupervised learning techniques, algorithms, and model evaluation. Participants will have the opportunity to work on real-world projects.",
        address: "456 Elm Street, Townsville, USA",
        capacity: 25,
        durationMinutes: 120,
        emailTextCandidate:
            "Dear Participant,\n\nThank you for registering for the Machine Learning Workshop. We're excited to explore the world of machine learning with you!\n\nBest regards,\nThe Innovate Labs Team",
        emailTextQualified:
            "Congratulations!\n\nYou've been accepted to participate in the Machine Learning Workshop. Get ready to dive deep into the fascinating world of machine learning!\n\nBest regards,\nThe Innovate Labs Team",
        minYearOfStudy: 3,
        maxYearOfStudy: 5,
        preferableFieldsOfStudy: [
            { id: "f99d6f4a-6b65-4db1-bbae-0a0300b04cb4", name: "Data Science" },
            { id: "c827a3a0-8f32-499d-9f9c-1ec6e90ff775", name: "Artificial Intelligence" },
        ],
        allFieldsOfStudyAccepted: true,
        archived: false,
        propositions: {
            id: ["d49b65b4-28c5-4310-8d5a-2f7fbd5c0a5e", "89089d1a-b4ac-4d45-bb8f-69a8d1d90d4c", "cde99e9a-8b72-4c8f-bc29-7e7cf456b890"],
        },
    },
    {
        id: "89089d1a-b4ac-4d45-bb8f-69a8d1d90d4c",
        company: {
            id: "56fde7e5-ef45-4a0f-99f1-65cb6b11847b",
            name: "Tech Academy",
            logoUrl: "https://example.com/logo-tech-academy.png",
            websiteUrl: "https://techacademy.org",
            shortDescription: "Tech Academy offers comprehensive tech education programs.",
            longDescription: "Tech Academy provides hands-on training in various programming languages, frameworks, and technologies.",
            displayPriority: 3,
            published: true,
        },
        university: {
            id: "4f83a6d6-5087-4da3-9c72-fd7bbaf5b7c5",
            name: "State University",
        },
        title: "Full-Stack Web Development Bootcamp",
        status: "CANCELLED",
        startsAt: "2024-05-20T09:00:00Z",
        registrationEndsAt: "2024-05-15T23:59:59Z",
        shortDescription: "Master the skills required to build modern web applications.",
        longDescription:
            "This bootcamp covers front-end and back-end web development, including HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. Participants will work on real-world projects and build a portfolio.",
        address: "789 Oak Avenue, Villageton, USA",
        capacity: 20,
        durationMinutes: 300,
        emailTextCandidate:
            "Dear Participant,\n\nThank you for registering for the Full-Stack Web Development Bootcamp. Get ready to embark on a journey to become a proficient web developer!\n\nBest regards,\nThe Tech Academy Team",
        emailTextQualified:
            "Congratulations!\n\nYou've been accepted to join the Full-Stack Web Development Bootcamp. Prepare to immerse yourself in the world of web development!\n\nBest regards,\nThe Tech Academy Team",
        minYearOfStudy: 3,
        maxYearOfStudy: 6,
        preferableFieldsOfStudy: [
            { id: "b4cb87fc-b9eb-4d2d-9f5f-9b432c8875e2", name: "Computer Engineering" },
            { id: "22bb6c39-5ec7-489a-871f-b73a15b5c8ee", name: "Information Technology" },
        ],
        allFieldsOfStudyAccepted: false,
        archived: true,
    },
    {
        id: "cde99e9a-8b72-4c8f-bc29-7e7cf456b890",
        company: {
            id: "b672398a-9564-49fa-8b85-903c487d43c1",
            name: "Data Solutions Ltd.",
            logoUrl: "https://example.com/logo-data-solutions.png",
            websiteUrl: "https://datasolutionsltd.com",
            shortDescription: "Data Solutions Ltd. specializes in data management and analytics.",
            longDescription: "Data Solutions Ltd. offers a range of services including data warehousing, business intelligence, and data visualization.",
            displayPriority: 2,
            published: true,
        },
        university: {
            id: "d9783fc4-0be2-4467-b3f2-8175a3fcb08e",
            name: "Metro University",
        },
        title: "Advanced SQL Workshop",
        status: "PUBLISHED",
        startsAt: "2024-06-15T10:00:00Z",
        registrationEndsAt: "2024-06-10T23:59:59Z",
        shortDescription: "Master advanced SQL techniques for efficient data manipulation and analysis.",
        longDescription:
            "This workshop covers advanced SQL topics such as window functions, common table expressions, and optimization techniques. Participants will learn to write complex queries and optimize database performance.",
        address: "321 Pine Street, Downtown, USA",
        capacity: 20,
        durationMinutes: 150,
        emailTextCandidate:
            "Dear Participant,\n\nThank you for registering for the Advanced SQL Workshop. Get ready to take your SQL skills to the next level!\n\nBest regards,\nThe Data Solutions Ltd. Team",
        emailTextQualified:
            "Congratulations!\n\nYou've been selected to participate in the Advanced SQL Workshop. Prepare to delve deep into advanced SQL concepts!\n\nBest regards,\nThe Data Solutions Ltd. Team",
        minYearOfStudy: 4,
        maxYearOfStudy: 6,
        preferableFieldsOfStudy: [
            { id: "a1dbb92f-6c3d-4ad3-a4fd-fa1d7b4b2618", name: "Database Management" },
            { id: "73a9017a-12e4-4c3b-b80b-1e79b21eb576", name: "Computer Engineering" },
        ],
        allFieldsOfStudyAccepted: true,
        archived: false,
        propositions: {
            id: ["d49b65b4-28c5-4310-8d5a-2f7fbd5c0a5e", "89089d1a-b4ac-4d45-bb8f-69a8d1d90d4c", "cde99e9a-8b72-4c8f-bc29-7e7cf456b890"],
        },
    },
    {
        id: "e1fcde55-1f64-4722-9ae0-08b6bce0e372",
        company: {
            id: "d097c7cd-ba26-4cb0-b4db-dc91cd46578f",
            name: "AI Innovations Inc.",
            logoUrl: "https://example.com/logo-ai-innovations.png",
            websiteUrl: "https://aiinnovations.com",
            shortDescription: "AI Innovations Inc. pioneers in artificial intelligence research and development.",
            longDescription: "AI Innovations Inc. is dedicated to pushing the boundaries of AI technology and applying it to solve real-world problems.",
            displayPriority: 3,
            published: true,
        },
        university: {
            id: "a22fcf40-9f6e-4e7e-b92e-85b9d4ac6524",
            name: "Tech University",
        },
        title: "Natural Language Processing Seminar",
        status: "FINISHED",
        startsAt: "2024-07-20T14:00:00Z",
        registrationEndsAt: "2024-07-15T23:59:59Z",
        shortDescription: "Explore the fascinating world of natural language processing and its applications.",
        longDescription:
            "This seminar covers key concepts in natural language processing (NLP), including text preprocessing, sentiment analysis, and named entity recognition. Participants will gain insights into cutting-edge NLP techniques and tools.",
        address: "789 Maple Avenue, Suburbia, USA",
        capacity: 15,
        durationMinutes: 120,
        emailTextCandidate:
            "Dear Participant,\n\nThank you for registering for the Natural Language Processing Seminar. Get ready to dive deep into the world of NLP!\n\nBest regards,\nThe AI Innovations Inc. Team",
        emailTextQualified:
            "Congratulations!\n\nYou've been selected to attend the Natural Language Processing Seminar. Prepare to explore the frontier of NLP!\n\nBest regards,\nThe AI Innovations Inc. Team",
        minYearOfStudy: 3,
        maxYearOfStudy: 5,
        preferableFieldsOfStudy: [
            { id: "efa47fd7-7156-459b-8b99-cda8d1328a91", name: "Artificial Intelligence" },
            { id: "3cb59c69-9009-4e8b-b4f2-468300f3c2ad", name: "Linguistics" },
        ],
        allFieldsOfStudyAccepted: false,
        archived: false,
        propositions: {
            id: ["d49b65b4-28c5-4310-8d5a-2f7fbd5c0a5e", "89089d1a-b4ac-4d45-bb8f-69a8d1d90d4c", "cde99e9a-8b72-4c8f-bc29-7e7cf456b890"],
        },
    },
    {
        id: "b319c4a2-8e12-4e02-9e3d-fb76451bb9b4",
        company: {
            id: "6f5b21f7-ba9d-42ff-bf0b-27d18c91d7f5",
            name: "TechHub",
            logoUrl: "https://example.com/logo-techhub.png",
            websiteUrl: "https://techhub.org",
            shortDescription: "TechHub provides a platform for tech enthusiasts to collaborate and innovate.",
            longDescription: "TechHub offers co-working spaces, networking events, and resources to support tech startups and professionals.",
            displayPriority: 4,
            published: true,
        },
        university: {
            id: "8ef06ecb-d91b-4b11-93af-255879f46bc8",
            name: "Institute of Technology",
        },
        title: "Blockchain Technology Workshop",
        status: "FINISHED",
        startsAt: "2024-08-10T09:30:00Z",
        registrationEndsAt: "2024-08-05T23:59:59Z",
        shortDescription: "Discover the fundamentals of blockchain technology and its potential applications.",
        longDescription:
            "This workshop introduces blockchain technology, covering topics such as decentralized networks, smart contracts, and cryptocurrency. Participants will learn through interactive sessions and practical exercises.",
        address: "567 Oak Street, Techland, USA",
        capacity: 25,
        durationMinutes: 150,
        emailTextCandidate: "Dear Participant,\n\nThank you for registering for the Blockchain Technology Workshop. Get ready to explore the world of blockchain!\n\nBest regards,\nThe TechHub Team",
        emailTextQualified:
            "Congratulations!\n\nYou've been selected to participate in the Blockchain Technology Workshop. Prepare to delve into the exciting realm of blockchain!\n\nBest regards,\nThe TechHub Team",
        minYearOfStudy: 2,
        maxYearOfStudy: 6,
        preferableFieldsOfStudy: [
            { id: "c9ac743f-4025-4e2b-b6f4-0f5b7b3588d6", name: "Computer Science" },
            { id: "ef9b2a95-520b-4a44-97a6-5e8c91b7b866", name: "Finance" },
        ],
        allFieldsOfStudyAccepted: true,
        archived: false,
        propositions: {
            id: ["d49b65b4-28c5-4310-8d5a-2f7fbd5c0a5e", "89089d1a-b4ac-4d45-bb8f-69a8d1d90d4c", "cde99e9a-8b72-4c8f-bc29-7e7cf456b890"],
        },
    },
    {
        id: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
        company: {
            id: "123e4567-e89b-12d3-a456-426614174001",
            name: "CodeCrafters Ltd.",
            logoUrl: "https://example.com/logo-codecrafters.png",
            websiteUrl: "https://codecrafters.io",
            shortDescription: "CodeCrafters Ltd. specializes in coding education and training.",
            longDescription: "CodeCrafters Ltd. offers coding bootcamps, workshops, and online courses for aspiring developers.",
            displayPriority: 1,
            published: true,
        },
        university: {
            id: "09876543-21ba-4321-a987-654321098765",
            name: "Tech Institute",
        },
        title: "Python Programming Workshop",
        status: "UNPUBLISHED",
        startsAt: "2024-09-15T10:00:00Z",
        registrationEndsAt: "2024-09-10T23:59:59Z",
        shortDescription: "Learn the fundamentals of Python programming language.",
        longDescription: "This workshop covers Python basics, data structures, control flow, and functions. Participants will work on coding exercises and projects to reinforce learning.",
        address: "789 Elm Street, Technocity, USA",
        capacity: 20,
        durationMinutes: 120,
        emailTextCandidate:
            "Dear Participant,\n\nThank you for registering for the Python Programming Workshop. Get ready to dive into the world of Python!\n\nBest regards,\nThe CodeCrafters Ltd. Team",
        emailTextQualified:
            "Congratulations!\n\nYou've been selected to participate in the Python Programming Workshop. Prepare to become proficient in Python programming!\n\nBest regards,\nThe CodeCrafters Ltd. Team",
        minYearOfStudy: 1,
        maxYearOfStudy: 4,
        preferableFieldsOfStudy: [
            { id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p", name: "Computer Science" },
            { id: "7q8r9s0t-u1v2-w3x4-y5z6-1a2b3c4d5e6f", name: "Information Technology" },
        ],
        allFieldsOfStudyAccepted: true,
        archived: false,
        propositions: {
            id: ["d49b65b4-28c5-4310-8d5a-2f7fbd5c0a5e", "89089d1a-b4ac-4d45-bb8f-69a8d1d90d4c", "cde99e9a-8b72-4c8f-bc29-7e7cf456b890"],
        },
    },
    {
        id: "q1w2e3r4-t5y6-u7i8-o9p0-a1s2d3f4g5h6",
        company: {
            id: "56789012-3456-7890-1234-567890123456",
            name: "TechGenius Solutions",
            logoUrl: "https://example.com/logo-techgenius.png",
            websiteUrl: "https://techgeniussolutions.com",
            shortDescription: "TechGenius Solutions offers innovative tech solutions and consulting services.",
            longDescription: "TechGenius Solutions helps businesses leverage technology to drive growth and innovation.",
            displayPriority: 2,
            published: true,
        },
        university: {
            id: "321cba98-7654-3210-ba98-76543210cba9",
            name: "Science University",
        },
        title: "Cybersecurity Seminar",
        status: "FINISHED",
        startsAt: "2024-10-20T14:00:00Z",
        registrationEndsAt: "2024-10-15T23:59:59Z",
        shortDescription: "Explore cybersecurity threats and best practices to secure digital assets.",
        longDescription:
            "This seminar covers cybersecurity fundamentals, threat intelligence, encryption techniques, and security protocols. Participants will learn to assess and mitigate cybersecurity risks.",
        address: "456 Maple Avenue, Techville, USA",
        capacity: 15,
        durationMinutes: 90,
        emailTextCandidate:
            "Dear Participant,\n\nThank you for registering for the Cybersecurity Seminar. Get ready to enhance your cybersecurity knowledge!\n\nBest regards,\nThe TechGenius Solutions Team",
        emailTextQualified:
            "Congratulations!\n\nYou've been selected to attend the Cybersecurity Seminar. Prepare to delve into the world of cybersecurity!\n\nBest regards,\nThe TechGenius Solutions Team",
        minYearOfStudy: 2,
        maxYearOfStudy: 5,
        preferableFieldsOfStudy: [
            { id: "1b2c3d4e-5f6g-7h8i-9j0k-1l2m3n4o5p6", name: "Cybersecurity" },
            { id: "7q8r9s0t1u2v3w4x5y6z", name: "Computer Science" },
        ],
        allFieldsOfStudyAccepted: false,
        archived: false,
        propositions: {
            id: ["d49b65b4-28c5-4310-8d5a-2f7fbd5c0a5e", "89089d1a-b4ac-4d45-bb8f-69a8d1d90d4c", "cde99e9a-8b72-4c8f-bc29-7e7cf456b890"],
        },
    },
    {
        id: "b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q",
        company: {
            id: "67890123-4567-8901-2345-678901234567",
            name: "InnovateTech Labs",
            logoUrl: "https://example.com/logo-innovatetech.png",
            websiteUrl: "https://innovatetechlabs.com",
            shortDescription: "InnovateTech Labs is dedicated to fostering innovation and technological advancement.",
            longDescription: "InnovateTech Labs conducts research and development in emerging technologies to create solutions for the future.",
            displayPriority: 3,
            published: true,
        },
        university: {
            id: "4321dcba-9876-4321-dcba-9876543210dc",
            name: "Innovation University",
        },
        title: "Internet of Things (IoT) Workshop",
        status: "FINISHED",
        startsAt: "2024-11-10T09:30:00Z",
        registrationEndsAt: "2024-11-05T23:59:59Z",
        shortDescription: "Explore the exciting world of the Internet of Things and its applications.",
        longDescription: "This workshop covers IoT concepts, protocols, sensor networks, and IoT platforms. Participants will learn to build IoT applications and prototypes.",
        address: "789 Pine Street, Innovatetown, USA",
        capacity: 25,
        durationMinutes: 120,
        emailTextCandidate: "Dear Participant,\n\nThank you for registering for the IoT Workshop. Get ready to discover the potential of IoT technology!\n\nBest regards,\nThe InnovateTech Labs Team",
        emailTextQualified: "Congratulations!\n\nYou've been selected to participate in the IoT Workshop. Prepare to dive into the world of IoT!\n\nBest regards,\nThe InnovateTech Labs Team",
        minYearOfStudy: 3,
        maxYearOfStudy: 6,
        preferableFieldsOfStudy: [
            { id: "98765432-1010-9876-5432-109876543210", name: "Electrical Engineering" },
            { id: "11121314-1516-1718-1920-212223242526", name: "Computer Science" },
        ],
        allFieldsOfStudyAccepted: true,
        archived: false,
        propositions: {
            id: ["d49b65b4-28c5-4310-8d5a-2f7fbd5c0a5e", "89089d1a-b4ac-4d45-bb8f-69a8d1d90d4c", "cde99e9a-8b72-4c8f-bc29-7e7cf456b890"],
        },
    },
]

export function getMockWorkshopById(workshopId: string): Workshop {
    const result = WORKSHOPS_MOCKS.find((workshop) => workshop.id === workshopId)
    if (!result) throw new Error(`Workshop with id ${workshopId} not found`)

    return result
}
