import cardPrice from "./img/cardPrice.png";
import cloudReact from "./img/cloudReact.png";
import growData from "./img/growData.png";
import shain from "./img/shain.png";
import criptoCurrency from './img/criptoCurrency.png';




function ProjectCards(props) {
    return (
        
        <section name="portfolio" className="max-w-[1700px] py-[150px] px-4 m-auto">
        <h1 className="text-center text-[50px] uppercase bg-gradient-to-r from-violet-800 to-fuchsia-500 bg-clip-text text-transparent underline underline-offset-4 font-[poppins] font-bold mb-5">My projects</h1>
        {/* fila */}
        <div className="flex flex-col items-center lg:justify-center lg:items-center lg:flex-row">
            {/* proyecto */}
            <div className="max-w-[450px] my-6 mx-[50px]  overflow-hidden border-[6px] border-slate-100 rounded-lg hover:shadow-2xl ">
                {/* overlay */}
                <img src={cardPrice} alt="" className="w-[100%] h-[100%] object-fit" />
                {/* info */}
                <div className="text-black bg-white w-[100%] p-3 border-t-4 border-slate-100 font-[poppins]">
                    <h2 className="text-2xl p-2">Card-UI</h2>
                    <p className="text-lg">These cards were made with React, CSS, Tailwind, and components from Material MUI </p>
                    <div className="justify-between ">
                    <ul className="list-disc flex justify-between p-3 ml-3 items-center md:flex md:justify-between">
                        <li className="p-0">ReactJS</li>
                        <li>Material MUI</li>
                        <li>Tailwind</li>

                    </ul>
                    </div>
                    <button className="border-[3px] rounded-full border-violet-700 bg-transparent mt-2 text-violet-700 hover:bg-violet-700 hover:text-white hover:shadow-2xl"><a href="https://price-card-eight.vercel.app" target="_blank" >Visit website</a></button>


                </div>
                
            </div>
            {/* proyecto */}
            <div className="max-w-[450px] my-6 mx-[50px]  overflow-hidden border-[6px] border-slate-100 rounded-lg hover:shadow-2xl ">
                {/* overlay */}
                <img src={cloudReact} alt="" className="w-[100%] h-[100%] object-fit" />
                {/* info */}
                <div className="text-black bg-white w-[100%] p-3 border-t-4 border-slate-100 font-[poppins]">
                    <h2 className="text-2xl p-2">Cloud Management</h2>
                    <p className="text-lg">This website was made with 100% ReactJS, and fully styled with TailwindCSS</p>
                    <div className="justify-between ">
                    <ul className="list-disc flex justify-between p-3 ml-3 items-center md:flex md:justify-between">
                        <li className="p-0">ReactJS</li>
                        <li>CSS</li>
                        <li>Tailwind</li>

                    </ul>
                    </div>
                    <button className="border-[3px] rounded-full border-violet-700 bg-transparent mt-2 text-violet-700 hover:bg-violet-700 hover:text-white hover:shadow-2xl"><a href="https://cloud-react.vercel.app/" target="_blank" >Visit website</a></button>



                </div>
            </div>
            </div>
            {/* COMIENZO FILA #2 */}
            <div className=" flex flex-col items-center lg:justify-center lg:items-center lg:flex-row">
        {/* <div className=" mx-0 sm:flex sm:flex-col sm:items-center md:flex lg:flex lg:justify-between lg:flex-row"> */}
            {/* proyecto */}
            <div className="max-w-[450px] my-6 mx-[50px]  overflow-hidden border-[6px] border-slate-100 rounded-lg hover:shadow-2xl ">
                {/* overlay */}
                <img src={criptoCurrency} alt="" className="w-[100%] h-[100%] object-fit" />
                {/* info */}
                <div className="text-black bg-white w-[100%] p-3 border-t-4 border-slate-100 font-[poppins]">
                    <h2 className="text-2xl p-2">Cripto Currency</h2>
                    <p className="text-lg">This is a website that consumes an API, and takes all Cripto's information and displays it on the screen. You can search the currency you want!!</p>
                    <div className="justify-between ">
                    <ul className="list-disc flex justify-between p-3 ml-3 items-center md:flex md:justify-between">
                        <li className="p-0">Javascript, Axios</li>
                        <li>ReactJS</li>
                        <li>CSS</li>

                    </ul>
                    </div>
                    <button className="border-[3px] rounded-full border-violet-700 bg-transparent mt-2 text-violet-700 hover:bg-violet-700 hover:text-white hover:shadow-2xl"><a href="https://github.com/danielafranc" target="_blank" >Visit website</a></button>



                </div>
                
            </div> 

            <div className="max-w-[450px] my-6 mx-[50px]  overflow-hidden border-[6px] border-slate-100 rounded-lg hover:shadow-2xl ">
                {/* overlay */}
                <img src={growData} alt="" className="w-[100%] h-[100%] object-fit" />
                {/* info */}
                <div className="text-black bg-white w-[100%] p-3 border-t-4 border-slate-100 font-[poppins]">
                    <h2 className="text-2xl p-2">Grow With Data</h2>
                    <p className="text-lg">This website is made with Javascript, more specificallly with the ReactJS framework and 100% styled with TailwindCSS</p>
                    <div className="justify-between ">
                    <ul className="list-disc flex justify-between p-3 ml-3 items-center md:flex md:justify-between">
                        <li className="p-0">ReactJS</li>
                        <li>CSS</li>
                        <li>Tailwind</li>

                    </ul>
                    </div>
                    <button className="border-[3px] rounded-full border-violet-700 bg-transparent mt-2 text-violet-700 hover:bg-violet-700 hover:text-white hover:shadow-2xl"><a href="https://data-app-js.vercel.app/" target="_blank" >Visit website</a></button>


                </div>
                
            </div>           
            </div>

            
            
       </section>
    



    );
}

export default ProjectCards;