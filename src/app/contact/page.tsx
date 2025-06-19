'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookAppointmentSection from '@/components/BookAppointmentSection';
import ContactHero from '@/components/contact/ContactHero';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import ContactAdditionalInfo from '@/components/contact/ContactAdditionalInfo';
import LocationMapCard from '@/components/location/location-map-card';

export default function ContactPage() {
    return (
        <>
            <Header isReferrer={false} setIsReferrer={() => { }} />
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <ContactAdditionalInfo />
            <BookAppointmentSection />
            <LocationMapCard />
            <Footer />
        </>
    );
} 