import { Inter } from 'next/font/google'; // Fix the import statement
import { client } from './utils/client';
import { useEffect, useState } from 'react';
  

const inter = Inter({ subsets: ['latin'] });

const EVENT_QUERY = `*[_type == 'project'] {
    title,
    slug,
    coverImage,
    duration,
    client,
    site,
    tags,
    body
  }`;

export default function Home() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        async function getTitles() {
            try {
                const content = await client.fetch(EVENT_QUERY)
                return content
            } catch (error) {
                console.error('Error fetching project titles:', error)
                return []
            }
        }

        getTitles().then((content) => {
            console.log(content)
            setProjects(content) // Update state with fetched data
        })
    }, []) // Empty dependency array to run effect only once

    return (
        <>
            <div className="w-full px-4 max-w-[1440px] flex flex-col lg:mx-auto">
                <p className="text-4xl px-4 py-20 w-[90%] md:text-4xl">
                    Hello  Im Ledion Restelica a curious designer and
                    devloper based in Prishtina
                </p>
                <div className="px-4 gap-6 flex flex-row">
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
                </div>
            </div>
            <div className="px-4 py-24">
                    <div className="grid grid-cols-1 max-w-[1440px] mx-auto gap-4 md:grid md:w-full md:grid-cols-2 md:grid-rows-2 md:gap-4 ">
                        {projects.map((project, index) => (
                            <div className='border h-96 w-full border-red-300 flex flex-col' key={index}>
                                <div>{project.client}</div>
                            </div>
                        ))}
                    </div>
            </div>
        </>
    )
}
