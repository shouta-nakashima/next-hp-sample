import Layout from "../components/Layout";
import Image from "next/image";

const Contact = () => {
	return (
		<Layout title={"Contact"}>
			<div className="bg-white text-center shadow-xl p-8 w-80 rounded">
				<div className="mt-4">
					<p className="font-bold">Contact Info</p>
				</div>
				<div className="flex justify-center mt-4">
					<Image
						className="rounted-full animate-bounce"
						src="/nakajilogo.png"
						width={60}
						height={60}
						alt="myProfile Photo"
					/>
				</div>
				<div className="mt-4">
					<p className="font-bold">Address</p>
					<p className="text-xs mt-2 text-gray-600">Ohnojyo Sity</p>
					<p className="font-bold mt-3">E-mail</p>
					<p className="text-xs mt-2 text-gray-600">nakaji@gmail.com</p>
					<p className="font-bold mt-3">Phone</p>
					<p className="text-xs mt-2 text-gray-600">080-xxxx-xxxx</p>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
