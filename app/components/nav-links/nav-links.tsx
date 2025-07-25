import Link from 'next/link';

export default function NavLinks() {
    return (
        <div
            className={
                'flex items-center w-full h-14 border-b-1 border-b-gray-200'
            }
        >
            <Link
                href={'/'}
                className={`absolute top-2 left-1/2 transform -translate-x-1/2 text-4xl hover:text-red-600 font-black`}
            >
                NXTABLE
            </Link>
        </div>
    );
}
