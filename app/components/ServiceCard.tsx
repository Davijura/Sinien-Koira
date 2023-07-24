
export default function ServiceCard() {
    return (
        <div className='flex flex-col md:flex-row mx-auto justify-center gap-5 text-black pb-12'>
            <div className="card w-full md:w-[550px] h-max  bg-gray-100 hover:bg-green-200 transition-colors duration-200 p-4 rounded-lg shadow-md">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">Prodej dřeva</h2>
                </div>
                <figure><img className="rounded-lg" src="/tree.jpg" alt="Shoes" /></figure>
                <div className="card-body">

                    <p className='text-base sm:text-lg text-black leading-relaxed'>Užijte si teplé a útulné zimní večery s naším kvalitním palivovým dřevem. Nabízíme suché a dobře zpracované palivové dřevo různých druhů. Zajišťujeme rychlé dodání a spolehlivou službu. Přineste teplo a pohodu do své domácnosti s naším palivovým dřevem. Objednejte ještě dnes!</p>
                </div>
            </div>
            <div className="divider md:divider-horizontal"></div>
            <div className="card w-full md:w-[550px] h-max  bg-gray-100 hover:bg-green-200 transition-colors duration-200 p-4 rounded-lg shadow-md">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">Služby</h2>
                </div>
                <figure><img className="rounded-lg" src="/tree.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <p className='text-base sm:text-lg  text-black leading-relaxed'>Jako součást našich služeb provádíme také pěstební činnosti. Snažíme se o udržení a rozvoj lesních porostů prostřednictvím výběrové výsadby. Naši odborníci se starají o zdraví a kvalitu lesů a pracují na jejich optimálním růstu a rozvoji. Péče o lesní prostředí je pro nás prioritou a jsme hrdí na naše úsilí při zachování biodiverzity. </p>
                </div>
            </div>
        </div>
    )
}
