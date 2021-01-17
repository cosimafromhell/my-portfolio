import Link from 'next/link';

// icon
import GithubIcon from '../public/image/icon/external-web-service/github.svg';
import ZennIcon from '../public/image/icon/external-web-service/zenn.svg';

export default function ExternalServiceProfileLinkIconSection() {
    const iconClassName = "cursor-pointer transition hover:bg-yellow-400 w-2/3 h-auto md:w-full md:h-auto";

    return (
        <section>
            <div className="flex md:col-gap-4 justify-items-center ml-2">
                <a href="https://github.com/cosimafromhell" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className={iconClassName} />
                </a>
                <a href="https://zenn.dev/cfh" target="_blank" rel="noopener noreferrer">
                    <ZennIcon className={iconClassName} />
                </a>
            </div>
        </section>
    )
}