import { NextResponse } from "next/server";



export async function GET() {

    const data = [
     {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "1234567890",
        address: "123 Main St, Anytown, USA",
        city: "Anytown",
        state: "CA",
        zip: "12345",
        country: "USA",
        website: "https://www.example.com",
        company: "Example Inc.",
        jobTitle: "Software Engineer",
        bio: "I am a software engineer with a passion for building web applications.",
        skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
        education: "Bachelor of Science in Computer Science",
        experience: "2 years of experience in software development",
        projects: [
            {
                id: 1,
                name: "Project 1",
                description: "This is a project description",
                url: "https://www.example.com/project1",
            },
        ],
        certifications: [
            {
                id: 1,
                name: "Certification 1",
                description: "This is a certification description",
                url: "https://www.example.com/certification1",
            },
        ],
        socialMedia: [
            {
                id: 1,
                name: "Twitter",
                url: "https://www.twitter.com/example",
            },
        ],
        interests: ["Software Development", "Web Development", "Mobile Development"],
        languages: ["English", "Spanish", "French"],
        hobbies: ["Reading", "Traveling", "Cooking"],
        achievements: [
            {
                id: 1,
                name: "Achievement 1",
                description: "This is a achievement description",
                url: "https://www.example.com/achievement1",
            },
        ],
        references: [
            {
                id: 1,
                name: "Reference 1",
                description: "This is a reference description",
                url: "https://www.example.com/reference1",
            },
        ],
    }
    ];

    return NextResponse.json({data: data});
    }
