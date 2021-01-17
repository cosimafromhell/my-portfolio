import Link from 'next/link';

export default function GotoBlogButton() {
    return (
        <div className="flex justify-center">
            <Link href="/blog">
                <a>
                    <h4 className="bg-black text-white rounded-full py-2 px-8 mb-10 hover:bg-yellow-400 hover:text-black">
                        すべての記事へ
                    </h4>
                </a>
            </Link>
        </div>
    );
}