import TwoSectionsGrid from './TwoSectionsGrid';
import Link from 'next/link';

// icon
import ReactIcon from '../public/image/icon/tech-stack/react.svg';
import NextJsIcon from '../public/image/icon/tech-stack/nextjs.svg';
import VercelIcon from '../public/image/icon/tech-stack/vercel.svg';
import TailwindIcon from '../public/image/icon/tech-stack/tailwind.svg';
import ReduxIcon from '../public/image/icon/tech-stack/redux.svg';
// import CodeIcon from '../public/image/icon/util/code.svg';

// export default function LinkIconSection({ techStacks, webServices }) {
export default function TechStackIconSection() {
    const iconClassName = "cursor-pointer transition hover:bg-yellow-400 w-full h-full";

    return (
        <section>
            <div className="flex justify-center">
                <div className="-mb-9 mr-6  z-50 bg-gray-500">
                    <h4 className="text-3xl lg:text-4xl mx-4 font-bold tracking-tighter leading-tight text-center">
                        Skills
                    </h4>
                </div>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-5 justify-items-center border-double border-8 border-black rounded-md col-gap-4 p-4 mx-6 lg:mx-32 xl:mx-96  mb-16 mt-4 z-40">
                <a href="https://ja.reactjs.org/" target="_blank" rel="noopener noreferrer">
                    <ReactIcon className={iconClassName} />
                </a>
                <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                    <ReduxIcon className={iconClassName} />
                </a>
                <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                    <NextJsIcon className={iconClassName} />
                </a>
                <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                    <TailwindIcon className={iconClassName} />
                </a>
                <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
                    <VercelIcon className={iconClassName} />
                </a>
            </div>
        </section>
    )
}