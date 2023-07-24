
export default function AboutInfo() {
    return (
        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-20 pb-24 items-center justify-items-center px-4 md:px-0 max-w-max">

            <div className="md:order-1 max-w-[450px]">
                <p className='font-bold text-black text-2xl pb-5 text-center sm:text-left'><strong>Vítejte u Vašeho společníka v oblasti lesnictví, těžby dřeva a pěstebních činností.</strong></p>
                <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed">
                    Jsme mladá a dynamická společnost s hlubokou vášní a respektem ke krajině. Nacházíme se přímo v srdci přírody, kde máme možnost obdivovat nezměrnou krásu a hodnoty, které lesy přinášejí. Naše cíle a metody v oblasti těžby dřeva jsou navrženy tak, aby byly udržitelné a šetrné k přírodě.
                </p>
            </div>

            <div className="md:order-2 max-w-[500px] h-[370px]">
                <img className="w-full h-full object-cover rounded-xl" src="/redTractor.jpg" alt="Logo" />
            </div>

        </div>
    )
}