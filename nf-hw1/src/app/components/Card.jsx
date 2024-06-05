import Link from "next/link";

export default function Card({blog}) {
    return (
        <div
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
            <img
                src={blog.image}
                alt="Blog Post Image"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">
                    {blog.description.slice(0, 50)}...
                </p>
                <Link
                    href={`/blogs/${blog.id}`}
                    className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors duration-300 group"
                    prefetch={false}
                >
                    Read More
                    <ArrowRightIcon
                        className="ml-2 w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-1"/>
                </Link>
            </div>
        </div>
    );
}

function ArrowRightIcon(props) {
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
        >
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
        </svg>
    );
}
