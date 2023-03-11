import linkedin from './img/linkedin.png'
import github from './img/github.png'


function Footer(props) {
    return (
        <>
           <section  name="contact" className='max-w-[100%] bg-violet-200 p-6 h-96 flex items-center justify-center'>
            <div className='w-[80%] bg-[#fff] m-auto p-6 border-4 border-white rounded-2xl shadow-lg'>
                    <div className='flex justify-between items-center font-[poppins]'>
                    {/* name and contact section */}
                <div className='p-0 m-0 text-left text-black'>
                <h1 className='text-4xl font-extrabold font-[poppins]'>Daniela Franco.</h1>
                <h3 className='underline mt-3 text-xl font-medium'>You can contact me on</h3>
                <p className='text-xl mt-3'>iosdanielafranco@gmail.com</p>
                <p className=''>I'm based in Buenos Aires, Argentina.</p>
                <p className='font-bold text-xl mt-2'>Open to work!</p>
                </div>
            
                {/* middle section*/}
                <div className=' flex justify-center p-auto'> 
                <p className='ml-[-20px] text-black'>All rights reserved - 2023 </p>
                </div>

                {/* social media section */}
                    <div className='flex p-auto'>
                    <a href=""><img src={github} alt="" className='w-[35px] h-[35px] m-4' /></a>
                    <a href=""><img src={linkedin} alt="" className='w-[35px] h-[35px] m-4' /></a>
                    </div>
                    </div>
                </div>
            </section> 
        </>
    );
}

export default Footer;