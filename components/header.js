import Link from 'next/link';
import {
  useRef,
  useState,
  useEffect,
} from 'react';

export default function Header() {
  const sectionEl = useRef(null);
  // カラムスタートのクラスを別途結合させるため文字列最後尾は必ずスペースを空けること。
  const h4CommonClassName = "justify-self-center text-white text-md md:text-xl tracking-tighter leading-tight mb-0 ";
  const aCommonClassName = "hover:bg-yellow-400 hover:text-black";
  const usuallyHeaderClass = "inset-x-0";
  const underTopPositionHeaderClass = "fixed top-0 inset-x-0 z-auto";
  const [sectionClassName, setSectionClassName] = useState(usuallyHeaderClass);
  const [initialOffsetTop, setInitialOffsetTop] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const handleUpdateHeaderClass = function () {
    if (window.pageYOffset <= initialOffsetTop) {
      setSectionClassName(usuallyHeaderClass);
      setIsSticky(false);
    } else {
      setSectionClassName(underTopPositionHeaderClass);
      setIsSticky(true);
    }
  };

  useEffect(() => {
    setInitialOffsetTop(sectionEl.current.offsetTop);
  }, [initialOffsetTop]);

  useEffect(() => {
    window.addEventListener('scroll', handleUpdateHeaderClass);
    return () => window.removeEventListener('scroll', handleUpdateHeaderClass);
  });

  return (
    <>
      {isSticky && <div className="mb-16 p-4"></div>}
      <section
        ref={sectionEl}
        className={sectionClassName}
      >
        <div className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-9 p-4 bg-black">
          <h4 className={h4CommonClassName + "col-start-2 md:col-start-3 lg:col-start-4"}>
            <Link href="/">
              <a className={aCommonClassName}>HOME</a>
            </Link>
          </h4>
          <h4 className={h4CommonClassName + "col-start-3 md:col-start-4 lg:col-start-5"}>
            <Link href="/blog">
              <a className={aCommonClassName}>BLOG</a>
            </Link>
          </h4>
          <h4 className={h4CommonClassName + "col-start-4 md:col-start-5 lg:col-start-6"}>
            <Link href="/mail">
              <a className={aCommonClassName}>MAIL</a>
            </Link>
          </h4>
        </div>
      </section>
    </>
  )
}
