import Image from 'next/image'

export default function ServiceCard (): any {
  return (
        <div className='flex flex-col md:flex-row items-center mx-auto justify-center gap-10 text-black pb-12'>
            <div className="card w-[450px] h-[550px] bg-white shadow-xl">
                <figure><Image width={450} height={550} src="/tree.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Prodej dřeva
                    </h2>
                    <p>Užijte si teplé a útulné zimní večery s naším kvalitním palivovým dřevem. Nabízíme suché a dobře zpracované palivové dřevo různých druhů. Zajišťujeme rychlé dodání a spolehlivou službu. Přineste teplo a pohodu do své domácnosti s naším palivovým dřevem. Objednejte ještě dnes!</p>
                </div>
            </div>

            <div className="card w-[450px] h-[550px] bg-white shadow-xl">
                <figure><Image width={450} height={550} src="/tree.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Naše služby
                    </h2>
                    <p>Jako součást našich služeb provádíme také pěstební činnosti. Snažíme se o udržení a rozvoj lesních porostů prostřednictvím výběrové výsadby. Naši odborníci se starají o zdraví a kvalitu lesů a pracují na jejich optimálním růstu a rozvoji. Péče o lesní prostředí je pro nás prioritou a jsme hrdí na naše úsilí při zachování biodiverzity.</p>
                </div>
            </div>
        </div>
  )
}
