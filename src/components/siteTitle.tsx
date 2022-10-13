import Head from 'next/head';

interface props {
	title: string;
}

const SiteTitle = ({ title }: props) => {
    const titleHeading = `Traya | ${title}`;
	return (
		<Head>
			<title>
				{titleHeading}
			</title>
			<meta property="og:title" content={`Traya | ${title}`} key={title} />
		</Head>
	);
};

export default SiteTitle;
