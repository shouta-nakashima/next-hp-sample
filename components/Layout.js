import Link from "next/link";
import Head from "next/head";

export default function Layout({ children, title = "HP by nextjs" }) {
	return (
		<div className="flex justyfy-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
			<Head>
				<title>{title}</title>
			</Head>
			<header>
				<nav className="bg-gray-800 w-screen">
					<div className="flex items-center pl-8 h-14">
						<div className="flex space-x-4">
							<Link href="/">
								<a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounted">
									Home
								</a>
							</Link>
							<Link href="/blog">
								<a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounted">
									Blog
								</a>
							</Link>
							<Link href="/contact">
								<a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounted">
									Contact
								</a>
							</Link>
						</div>
					</div>
				</nav>
			</header>
			<main className="flex flex-1 justify-center items-center flex-col w-screen">
				{children}
			</main>
			<footer className="w-full h-12 flex justify-center items-center border-t">
				<a
					className="flex items-center"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					Powered by{" "}
					<img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
				</a>
			</footer>
		</div>
	);
}
