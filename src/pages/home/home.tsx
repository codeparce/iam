import { FileText, Github, LinkedinIcon } from 'lucide-react'
import './Home.css'
import { useEffect, useState } from "react"
import { fetchData, type Experiencia } from '@/lib/utils'
import VerticalCarousel from '../proyect/verticalCarousel'
import Loading from '../loading/loading'


const urlRes = "https://raw.githubusercontent.com/JinitD/code-parce-res/refs/heads/main/"
const avatar = "https://raw.githubusercontent.com/codeparce/code-parce-res/refs/heads/main/cv/iam.jpg";
const pathFrameworks = urlRes + "cv/frameworks"

const allImages = [
    '/angular.png', '/docker.webp', '/gitlab-ci-cd.png', '/kl.png',
    '/aws.png', '/gcloud.png', '/nodejs.png', '/pw.png',
    '/cucumber.jpeg', '/springboot.png', '/react.png', '/vite.png',
    '/devops.png', '/tl.png', '/boo.png',
];


function Home() {
    const images = allImages.sort(() => 0.5 - Math.random()).slice(0, 16);
    const [data, setData] = useState<Experiencia[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await fetchData<Experiencia[]>({
                    url: "https://us-central1-code-parce.cloudfunctions.net/code-parce-func-main",
                    method: "POST",
                    body: { collection: "proyects" },
                })
                setData(result)
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    if (loading) {
        return <Loading />
    }

    return (
        <section
            className="flex flex-col justify-center items-center w-screen min-h-screen  p-2
                       bg-zinc-950 text-zinc-200 text-center md:text-left transition-all duration-300"
            id="home"
        >
            <div className="flex flex-col justify-center items-center  w-full rounded-3xl  
                            md:w-fit md:flex-row md:py-10 
                            bg-zinc-900 border border-zinc-800 
                            shadow-[0_0_40px_rgba(16,185,129,0.08)]">

                {/* Avatar */}
                <div className="flex justify-center md:w-1/3 w-50 py-2">
                    <img
                        className="w-50 h-50 md:w-90 md:h-90 rounded-full object-cover 
                                   border-2 border-emerald-400/40 shadow-lg"
                        src={avatar}
                        alt="Jhoan Dorado"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 md:w-2/4  w-full">

                    <h1 className="text-2xl md:text-5xl font-bold font-mono text-emerald-400">
                        $ Hola, soy Jhoan Dorado
                    </h1>

                    <h2 className="text-lg md:text-2xl font-semibold text-zinc-300">
                        Ingeniero en Sistemas
                    </h2>

                    <span className="text-sm md:text-base text-zinc-400">
                        Especializado en DevOps, desarrollo frontend/backend
                        y aseguramiento de la calidad.
                    </span>

                    {/* Proyectos */}
                    <h2 className="text-lg md:text-base font-semibold text-emerald-400 md:mt-4">
                        Proyectos destacados
                    </h2>

                    <VerticalCarousel data={data} />

                    {/* Skills */}
                    <h2 className="text-lg md:text-base font-semibold text-emerald-400 md:mt-4">
                        Stack & Skills
                    </h2>

                    <div className="flex flex-wrap gap-1 md:gap-2 justify-center md:justify-start ">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={pathFrameworks + img}
                                alt={`Skill ${index}`}
                                className="w-9 md:w-11 aspect-square object-cover 
                                           rounded-md bg-zinc-800 m-1 p-1 
                                           border border-zinc-700 
                                           hover:border-yellow-400 
                                           hover:scale-110 
                                           transition-all duration-300"
                            />
                        ))}
                    </div>

                    {/* Social */}
                    <div className="flex flex-col w-full md:mt-6 p-5 md:p-0">
                        <div className="flex gap-6 justify-center md:justify-start text-zinc-400">
                            <a href="https://linkedin.com/in/jhoandoradosanchez"
                               className="hover:text-blue-400 transition-colors">
                                <LinkedinIcon size={28} strokeWidth={1.25} />
                            </a>

                            <a href="https://github.com/codeparce"
                               className="hover:text-blue-400 transition-colors">
                                <Github size={28} strokeWidth={1.25} />
                            </a>

                            <a href="https://drive.google.com/file/d/138QKwbEuJyAmlD3q76B377DA7pBGXxUZ/view?usp=drive_link"
                               className="hover:text-blue-400 transition-colors">
                                <FileText size={28} strokeWidth={1.25} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Home