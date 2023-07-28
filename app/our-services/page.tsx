'use client'
import NewNavbar from '../components/NewNavbar';
import ServicePage from '../components/ServicePage';
import NavbarAbove from '../components/NavbarAbove';

export default function OurServices() {
    return (
        <div>

            <div className='hidden sm:block'>
                <NavbarAbove />
            </div>

            <NewNavbar />

            <ServicePage />

        </div>

    );
}