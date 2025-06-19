import React from 'react';
import Image from 'next/image';

const teamMembers = [
    {
        name: 'Dr. Farhan Ahmed',
        title: 'Director and Clinical Radiologist',
        description:
            'Dr. Farhan Ahmed is a highly esteemed Director and Clinical Radiologist with over 15 years of experience in the field. He specializes in advanced imaging techniques and is dedicated to providing accurate diagnoses to enhance patient care.',
        image: '/assets/team/farhan-ahmed.png', // Update this path as needed
    },
    // Duplicate for demo; in real use, add more unique members
    {
        name: 'Dr. Farhan Ahmed',
        title: 'Director and Clinical Radiologist',
        description:
            'Dr. Farhan Ahmed is a highly esteemed Director and Clinical Radiologist with over 15 years of experience in the field. He specializes in advanced imaging techniques and is dedicated to providing accurate diagnoses to enhance patient care.',
        image: '/assets/team/farhan-ahmed.png',
    },
    {
        name: 'Dr. Farhan Ahmed',
        title: 'Director and Clinical Radiologist',
        description:
            'Dr. Farhan Ahmed is a highly esteemed Director and Clinical Radiologist with over 15 years of experience in the field. He specializes in advanced imaging techniques and is dedicated to providing accurate diagnoses to enhance patient care.',
        image: '/assets/team/farhan-ahmed.png',
    },
    {
        name: 'Dr. Farhan Ahmed',
        title: 'Director and Clinical Radiologist',
        description:
            'Dr. Farhan Ahmed is a highly esteemed Director and Clinical Radiologist with over 15 years of experience in the field. He specializes in advanced imaging techniques and is dedicated to providing accurate diagnoses to enhance patient care.',
        image: '/assets/team/farhan-ahmed.png',
    },
    {
        name: 'Dr. Farhan Ahmed',
        title: 'Director and Clinical Radiologist',
        description:
            'Dr. Farhan Ahmed is a highly esteemed Director and Clinical Radiologist with over 15 years of experience in the field. He specializes in advanced imaging techniques and is dedicated to providing accurate diagnoses to enhance patient care.',
        image: '/assets/team/farhan-ahmed.png',
    },
    {
        name: 'Dr. Farhan Ahmed',
        title: 'Director and Clinical Radiologist',
        description:
            'Dr. Farhan Ahmed is a highly esteemed Director and Clinical Radiologist with over 15 years of experience in the field. He specializes in advanced imaging techniques and is dedicated to providing accurate diagnoses to enhance patient care.',
        image: '/assets/team/farhan-ahmed.png',
    },
];

function TeamCard({ member }: { member: typeof teamMembers[0] }) {
    return (
        <div className="bg-white rounded-2xl shadow-[0_8px_32px_0_rgba(44,44,44,0.10)] flex flex-col overflow-hidden">
            <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={260}
                className="w-full h-[320px] object-cover rounded-t-2xl"
                priority
                quality={95}
            />
            <div className="w-full text-left p-6 rounded-b-2xl">
                <div
                    className="text-[22px] md:text-[24px] font-medium mb-1"
                    style={{ fontFamily: 'deuterium-variable, Inter, sans-serif', color: '#EC008C' }}
                >
                    {member.name}
                </div>
                <div
                    className="text-[17px] md:text-[18px] font-medium mb-2"
                    style={{ fontFamily: 'deuterium-variable, Inter, sans-serif', color: '#3C4247' }}
                >
                    {member.title}
                </div>
                <div
                    className="text-[15px] md:text-[16px] text-[#3C4247]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                >
                    {member.description}
                </div>
            </div>
        </div>
    );
}

export default function OurTeam() {
    return (
        <section className="w-full bg-white py-20 px-4 md:px-0 flex flex-col gap-10">
            <div className="w-full max-w-6xl mx-auto">
                <h2
                    className="text-4xl md:text-5xl font-medium text-left mb-4"
                    style={{ fontFamily: 'deuterium-variable, Inter, sans-serif', color: '#662D91' }}
                >
                    Our team
                </h2>
                <p
                    className="text-lg md:text-xl text-left mb-12 max-w-2xl"
                    style={{ fontFamily: 'Inter, sans-serif', color: '#3C4247' }}
                >
                    Learn more about our diverse team and how they can help.
                </p>
            </div>
            <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
                {teamMembers.map((member, idx) => (
                    <TeamCard key={idx} member={member} />
                ))}
            </div>
        </section>
    );
}
