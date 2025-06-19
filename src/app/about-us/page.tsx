'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import AboutUsHero from '../../components/about-us/aboutus-hero';
import AboutUsSection from '../../components/about-us/about-us';
import FoundingPrinciples from '../../components/about-us/founding-principles';
import OurTeam from '../../components/about-us/our-team';
import BookAppointmentSection from '../../components/BookAppointmentSection';
import Footer from '../../components/Footer';

export default function AboutUsPage() {
    const [isReferrer, setIsReferrer] = useState(false);
    return (
        <>
            <Header isReferrer={isReferrer} setIsReferrer={setIsReferrer} />
            <AboutUsHero />
            <AboutUsSection />
            <FoundingPrinciples />
            <OurTeam />
            <BookAppointmentSection />
            <Footer />
        </>
    );
}
