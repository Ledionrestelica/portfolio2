import { Inter } from 'next/font/google';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from 'next-themes';
import Image from 'next/image'
import estateXimg from "../public/estatex.svg"
import munthesImg from "../public/munthes.png"
import aliusImg from "../public/alius.png"

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const notify = () => toast("Email copied!");
    const { theme } = useTheme();


    const copyEmailToClipboard = () => {
        const email = 'ledionrestelica7@gmail.com'
        navigator.clipboard
            .writeText(email)
        
    }

    return (
        <>
            <div className="w-full px-4 max-w-[1440px] flex flex-col lg:mx-auto">
                <p className="text-6xl px-2 py-20 w-full md:text-6xl lg:text-8xl">
                    Hello I am Ledion Restelica, a frontend developer based in Prishtina
                </p>
                <div className="px-4 gap-6 flex flex-row flex-wrap">
                    <a
                        className="hover:scale-110 transition-all ease-in-out"
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        className="hover:scale-110 transition-all ease-in-out"
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </a>
                    <a
                        className="hover:scale-110 transition-all ease-in-out"
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Facebook
                    </a>
                    <a
                        className="hover:scale-110 transition-all ease-in-out"
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a
                        className="hover:scale-110 transition-all ease-in-out"
                        href="https://www.example.com/blog"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Blog
                    </a>

                    <div onClick={copyEmailToClipboard}>
                        <button
                            className="hover:scale-110 transition-all ease-in-out"
                            onClick={notify}
                        >
                            Email
                        </button>
                        <ToastContainer
                            stacked
                            theme={theme}
                        />
                    </div>
                </div>
                <div className='px-4 pt-32 h-screen'>
                    <p className='text-3xl font-normal md:text-4xl lg:text-6xl mb-16'>
                        Work
                    </p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                        <div className='cursor-pointer w-full h-96 flex flex-col shadow-md shadow-gray-400 dark:shadow-gray-600 rounded-2xl'>
                            <div className='flex flex-1 justify-center p-4'>
                                <Image className='hover:scale-105 transition-all ease-in-out' src={estateXimg} width={500} height={500}></Image>
                            </div>
                            <div className='flex-none bg-zinc-200 hover:bg-zinc-400 dark:bg-zinc-900 rounded-2xl p-2 dark:hover:bg-gray-800 transition-all ease-in-out'>
                                <p className='text-lg font-medium text-gray-800 dark:text-zinc-200'>EstateX</p>
                                <p className='line-clamp-2 text-zinc-500 dark:text-zinc-400'>Created this website using Framer, Framer Motion. Complete redesign and responsive website, form submission control</p>
                            </div>
                        </div>
                        <div className='cursor-pointer w-full h-96 flex flex-col shadow-md shadow-gray-400 dark:shadow-gray-600 rounded-2xl'>
                            <div className='flex flex-1 justify-center p-4'>
                                <Image className='hover:scale-105 transition-all ease-in-out invert dark:filter-none' src={munthesImg} width={300} height={300}></Image>
                            </div>
                            <div className='flex-none bg-zinc-200 hover:bg-zinc-400 dark:bg-zinc-900 rounded-2xl p-2 dark:hover:bg-gray-800 transition-all ease-in-out'>
                                <p className='text-lg font-medium text-gray-800 dark:text-zinc-200'>Munthes.se</p>
                                <p className='line-clamp-2 text-zinc-500 dark:text-zinc-400'>A restaurant page made with HTML, CSS and JS, made for a client in Sweden, fully responsive and functional.</p>
                            </div>
                        </div>
                        <div className='cursor-pointer w-full h-96 flex flex-col shadow-md shadow-gray-400 dark:shadow-gray-600 rounded-2xl'>
                            <div className='flex flex-1 justify-center p-4'>
                                <Image className='hover:scale-105 transition-all ease-in-out  dark:invert object-cover' src={aliusImg} width={300} height={300}></Image>
                            </div>
                            <div className='flex-none bg-zinc-200 hover:bg-zinc-400 dark:bg-zinc-900 rounded-2xl p-2 dark:hover:bg-gray-800 transition-all ease-in-out'>
                                <p className='text-lg font-medium text-gray-800 dark:text-zinc-200'>Alius</p>
                                <p className='line-clamp-2 text-zinc-500 dark:text-zinc-400'>I made this website using framer and framer motion for different animations, including on-scroll animations, on-appear etc..</p>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}
