import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi'

export default function NavbarAbove (): any {
  return (
        <div className="flex items-center bg-gray-800 h-12 justify-center md:justify-end  lg:px-32 md:px-14 px-8 ">
            <div className="">
                <ul className="flex justify-between gap-5 text-white font-bold text-sm">
                    <li className="flex items-center">
                        <HiOutlineMail className="text-green-500 mr-2" size={24} />
                        <a href="mailto:sinienkoira@gmail.com">sinienkoira@gmail.com</a>
                    </li>
                    <li className="flex items-center">
                        <HiOutlinePhone className="text-green-500 mr-2" size={24} />
                        <a href="tel:720062090">+420 720 062 090</a>
                    </li>
                </ul>
            </div>
        </div>
  )
}
