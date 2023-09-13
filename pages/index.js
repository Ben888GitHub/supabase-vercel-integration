import { Inter } from 'next/font/google';
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function Home() {
	const [todos, setTodos] = useState([]);

	const fetchTodos = async () => {
		const { data, error } = await supabase.from('todos').select('*');
		if (data) {
			// console.log(data);
			setTodos(data);
		} else {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTodos();
	}, []);

	return (
		<main
			className={`flex  flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<p className="text-3xl font-medium">Supabase Vercel Integration</p>
			<br />
			{todos ? (
				todos?.map(({ id, title }) => (
					<p key={id} className="text-xl">
						{title}
					</p>
				))
			) : (
				<p className="text-2xl">Loading...</p>
			)}
		</main>
	);
}
