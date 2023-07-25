import { useState } from 'react'

export default function FormRadio() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedOption(e.target.value);
    }

    return (
        <div className='flex flex-col items-center text-black'>
            <div className='flex flex-row justify-center gap-10'>
                <label className='flex items-center'>
                    <input type="radio" value="Zajistit dopravu" name="radio-1" className='radio radio-success bg-white' onChange={handleRadioChange}/>
                    <span className='ml-2'>Zajistit dopravu</span>
                </label>
                <label className='flex items-center'>
                    <input type="radio" value="Osobní vyzvednutí" name="radio-1" className='radio radio-success bg-white' onChange={handleRadioChange}/>
                    <span className='ml-2'>Osobní vyzvednutí</span>
                </label>
            </div>

            {selectedOption === 'Zajistit dopravu' && (
                <p className="mt-4">Dřevo vozíme vlastním kontejnerem se sklápěním dozadu, na auto naložíme 10 PRM, cena 30Kč/1 km (tam i zpět, minimálně však 600Kč).</p>
            )}

            {selectedOption === 'Osobní vyzvednutí' && (
                <p className="mt-4">Adresa pro vyzvednutí dřeva je v kontaktech</p>
            )}
        </div>
    )
}