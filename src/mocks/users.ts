import { FieldOfStudy, University, Workshop } from "@/types/workshop";

type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    sex: "Female" | "Male";
    university: University;
    fieldOfStudy: FieldOfStudy;
    yearOfStudy: number;
    languageSkills: Array<{
        id: string;
        language: {
            id: string;
            name: string;
        };
        skillLevel: "NATIVE" | "FLUENT" | "BASIC";
    }>;
    workshopMembers: Array<Workshop>;
    role: "STUDENT" | "COMPANY" | "ADMIN";
}

export const USER_MOCKS: User[] = [
    {
        id: "3e4f5a6b-7c8d-9e0f-1a2b3c4d5e6f",
        firstName: "Alice",
        lastName: "Smith",
        email: "alice.smith@example.com",
        phoneNumber: "5551234567",
        sex: "Female",
        university: {
            name: "Aalto University",
            id: "Aalto University",
        },
        fieldOfStudy: {
            name: "Computer Science",
            id: "Bioinformatics",
        },
        yearOfStudy: 4,
        languageSkills: [
            {
                id: "3e4f5a6b-7c8d-9e0f-1a2b3c4d5e6f",
                language: {
                    id: "ENGLISH",
                    name: "English",
                },
                skillLevel: "NATIVE",
            },
        ],
        workshopMembers: [], // Keep this array empty
        role: "STUDENT",
    },
]
