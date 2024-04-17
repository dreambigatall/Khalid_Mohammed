import { Link } from 'react-router-dom';

export default function DownloadResume() {
  return (
    <div className=' relative w-full'>
      <div className=' h-[1px] bg-gradient-to-r from-gold-light to-gold-dark w-full absolute top-0 md:top-[-11px]'></div>
      <Link
        to={''}
        className=' hover:text-accent text-text-secondary duration-300 transition-all right-[50%] translate-x-[120%] bg-background absolute translate-y-[-50%] font-vietnam capitalize text-xs px-2 py-1 xs:translate-x-[158%] md:translate-x-[210%] md:translate-y-[-100%]'
      >
        download resume
      </Link>
    </div>
  );
}
