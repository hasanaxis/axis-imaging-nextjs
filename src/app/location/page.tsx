'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '@/components/Footer';
import LocationHero from '@/components/location/hero-location';
import LocationMapCard from '@/components/location/location-map-card';

export default function Location() {
    const [isReferrer, setIsReferrer] = useState(false);
    return (
        <>
            <Header isReferrer={isReferrer} setIsReferrer={setIsReferrer} />
            <LocationHero />
            <LocationMapCard />
            <Footer />
        </>
    );
}