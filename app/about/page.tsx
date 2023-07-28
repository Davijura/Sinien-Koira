'use client'
import AboutPage from '../components/AboutPage';
import NewNavbar from '../components/NewNavbar';
import NavbarAbove from '../components/NavbarAbove';

export default function About() {
  return (
    <div>

      <div className='hidden sm:block'>
        <NavbarAbove />
      </div>

      <NewNavbar />

      <AboutPage />

    </div>

  );
}