
export default function AboutInfoThird() {
    return (
        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-20 pb-20 items-center justify-items-center px-4 md:px-0 max-w-max">

            <div className="md:order-1 max-w-[450px]">
                <p className='font-bold text-black text-2xl pb-5 text-center sm:text-left'><strong>Naše služby jsou šité na míru potřebám našich zákazníků.</strong></p>
                <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed">
                    Ať už jste majitelem lesního pozemku, výrobcem dřeva nebo jiným partnerem v lesnickém odvětví, nabízíme vám profesionální a spolehlivé řešení. Sinien Koira, s. r. o. je synonymem pro kvalitu, důvěryhodnost a spolehlivost. Pokud máte zájem o naše služby nebo se chcete dozvědět více o naší společnosti, jsme připraveni vám pomoci a společně dosáhnout vašich cílů v oblasti lesnictví.
                </p>
            </div>

            <div className="md:order-2 max-w-[500px] h-[370px]">
                <img className="w-full h-full object-cover" src="/chainsaw.jpg" alt="Logo" />
            </div>

        </div>
    )
}