
export default function AboutInfoSecond() {
    return (
        <div className="grid grid-cols-1 mx-auto md:grid-cols-2 gap-20 pb-28 items-center justify-items-center px-4 md:px-0 max-w-max">

            <div className="md:order-2 max-w-[450px]">
                <p className='font-bold text-black text-2xl pb-5 text-center sm:text-left '><strong>Nabízíme komplexní služby v oblasti lesnictví, včetně těžby dřeva, jeho zpracování a prodeje. </strong></p>
                <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed">
                    Naše týmy se skládají z kvalifikovaných odborníků s bohatými zkušenostmi v oblasti lesnictví. Pro dosažení optimálních výsledků pečlivě vybíráme nejefektivnější techniky a postupy. Jsme hrdí na naši ekologickou odpovědnost a dodržujeme přísné normy a předpisy týkající se ochrany životního prostředí a udržitelného využívání přírodních zdrojů. Součástí naší práce je také aktivní účast na programu obnovy lesů a podpora projektů zaměřených na ochranu biodiverzity.
                </p>
            </div>

            <div className="md:order-1 max-w-[500px] h-[370px]">
                <img className="w-full h-full object-cover" src="/wood.jpg" alt="Logo" />
            </div>

        </div>
    )
}