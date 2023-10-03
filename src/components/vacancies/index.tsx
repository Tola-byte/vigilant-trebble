import { VacancySlider } from "../vacanyslider"

export const Vacanies = () => {
    return (
        <div className="bg-[#dddddd]">
            <div className="flex flex-col text-center p-5">

                <p className="font-semibold text-[3rem] text-gray-800 ">Come join us</p>
                <span className="text-[3rem]">and make an impact in Indonesia</span>

            <div>
            <button className="rounded-full p-4 text-gray-100 bg-[#038767] p-[1rem] w-[220px] mt-[2rem]">
                Search for vacancies
            </button>
            </div>
            </div>
           <VacancySlider/>
        </div>
    )
}