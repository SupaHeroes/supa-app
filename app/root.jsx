import { Outlet, LiveReload, Link, Links, Meta } from 'remix';
import styles from './styles/app.css';

export function links() {
	return [{ rel: 'stylesheet', href: styles }];
}

export const meta = () => {
	const description = 'A blog about remix';
	const keyword = 'remix, react, javascript';

	return {
		description,
		keyword,
	};
};

export default function App() {
	return (
		<Document>
			<Layout>
				<Outlet />
			</Layout>
		</Document>
	);
}

function Document({ children, title }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
				<title>{title ? title : 'Remix Blog'}</title>
			</head>
			<body>
				{children}
				{process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
			</body>
		</html>
	);
}

function Layout({ children }) {
	return (
		<>
			<nav className='navbar'>
				<Link to='/' className='logo'>
					Remix
				</Link>

				<ul className='nav'>
					<li>
						<Link to='/posts'>Posts</Link>
					</li>
				</ul>
			</nav>

			<div className='container'>{children}</div>
		</>
	);
}

export function ErrorBoundary({ error }) {
	console.log(error);

	return (
		<Document>
			<Layout>
				<h1>Error</h1>
				<p>{error.message}</p>
			</Layout>
		</Document>
	);
}
