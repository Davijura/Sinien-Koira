import Link from 'next/link';
import { ChangeEvent } from 'react';

interface CheckboxProps {
    isChecked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ isChecked, onChange }: CheckboxProps) {
    return (
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-between pt-5">
            <label className="flex items-center space-x-3  mb-5 sm:mb-0">
                <input type="checkbox" checked={isChecked} onChange={onChange} className="form-checkbox h-5 w-5 text-blue-500" />
                <span className="text-sm text-gray-700">Souhlasím se <Link href="/ochrana-osobnich-udaju" target="_blank" rel="noopener noreferrer" className="text-blue-500">zpracováním osobních údajů</Link>
                </span>
            </label>
            <button type="submit" disabled={!isChecked} className="btn bg-green-500 border-none text-white" role="button" aria-disabled="true">Vytvořit poptávku</button>
        </div>
    );
}