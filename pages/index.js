import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main
			className={`flex  flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<p className="text-3xl font-light">Supabase Vercel Integration</p>
		</main>
	);
}