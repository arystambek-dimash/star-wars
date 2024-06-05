import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center  p-6 text-gray-500 w-[60%] m-auto border-t">
            <div className="text-xs mb-4">
                © 2024 Arystambek Dinmukhammed ·
                <Link href="#" className="text-[#0000ff] hover:underline" prefetch={false}>
                    Privacy
                </Link>{" "}
                ·
                <Link href="#" className="text-[#0000ff] hover:underline" prefetch={false}>
                    Terms
                </Link>{" "}
                ·
                <Link href="#" className="text-[#0000ff] hover:underline" prefetch={false}>
                    Collection notice
                </Link>
            </div>
            <div className="flex space-x-4">
                <Link href="#" className="hover:text-[#1877F2]">
                    <FacebookIcon className="text-[#1877F2]"/>
                </Link>
                <Link href="#" className="hover:text-[#1DA1F2]">
                    <TwitterIcon className="text-[#1DA1F2]"/>
                </Link>
                <Link href="#" className="hover:text-[#C13584]">
                    <InstagramIcon className="text-[#C13584]"/>
                </Link>
                <Link href="#" className="hover:text-[#0077B5]">
                    <LinkedinIcon className="text-[#0077B5]"/>
                </Link>
                <Link href="#" className="hover:text-[#E4405F]">
                    <HeartIcon className="text-[#E4405F]"/>
                </Link>
            </div>
        </div>
    )
}


function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#1877F2]"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
    )
}

function HeartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#E4405F]"
        >
            <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
    )
}

function InstagramIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#C13584]"
        >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
    )
}

function LinkedinIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#0077B5]"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
        </svg>
    )
}

function TwitterIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-[#1DA1F2]"
        >
            <path
                d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
        </svg>
    )
}

export default Footer;
