import { type ChangeEvent } from 'react'

interface OrderInfoProps {
  personalData: {
    user_name: string
    user_sureName: string
    user_phone: number
    user_email: string
    user_address: string
    user_city: string
    user_psc: number
  }
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function OrderInfo ({ personalData, onChange }: OrderInfoProps): JSX.Element {
  return (
        <div className="flex flex-wrap -mx-2" >
            <div className="w-full md:w-2/5 lg:w-1/2 px-2" >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Jméno:</label>
                    <input onChange={onChange} type="text" value={personalData.user_name} name="user_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Příjmení:</label>
                    <input onChange={onChange} type="text" value={personalData.user_sureName} name="user_sureName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Telefon:</label>
                    <input onChange={onChange} type="phone" value={personalData.user_phone} name="user_phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">E-mail:</label>
                    <input onChange={onChange} type="email" value={personalData.user_email} name="user_email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>

            </div>
            <div className="w-full md:w-3/5 lg:w-1/2 px-2" >
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Ulice a číslo:</label>
                    <input onChange={onChange} type="text" value={personalData.user_address} name="user_address" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Obec:</label>
                    <input onChange={onChange} type="text" value={personalData.user_city} name="user_city" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">PSČ:</label>
                    <input onChange={onChange} type="text" value={personalData.user_psc} name="user_psc" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline" />
                </div>
            </div>
        </div>
  )
}
