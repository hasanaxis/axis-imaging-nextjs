'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/about-us/breadcrumbs';
import AboutUsHero from '../../components/about-us/aboutus-hero';
import AboutUsSection from '../../components/about-us/about-us';
import BookAppointmentSection from '../../components/BookAppointmentSection';
import Footer from '../../components/Footer';

export default function AboutUsPage() {
    const [isReferrer, setIsReferrer] = useState(false);
    return (
        <>
            <Header isReferrer={isReferrer} setIsReferrer={setIsReferrer} />
            <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us', isActive: true }]} />
            <AboutUsHero />
            <AboutUsSection />
            <BookAppointmentSection />
            <Footer />
        </>
    );
}
