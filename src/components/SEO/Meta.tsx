import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

interface IMeta {
  title: string;
  description?: string;
  keywords?: string;
}

const getTitle = (title: string) => `${title} | Кочнев Антон`;

const Meta: FC<PropsWithChildren<IMeta>> = ({
  title,
  description,
  keywords,
}) => {
  return (
    <Head>
      <title>{getTitle(title)}</title>
      {description ? (
        <>
          <meta name="description" content={description} />
        </>
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}

      <link rel="icon" href="/favicon.png" type="image/png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Kochnev Anton | Frontend Developer" />
      <meta
        name="keywords"
        content={`${
          keywords ? keywords + ',' : ''
        } Кочнев Антон, Kochnev Anton, веб-разработчик, web, frontend, developer, html, css, javascript, react, NextJS`}
      />

      <meta property="og:title" content={getTitle(title)} />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/preview.png" />



    </Head>
  );
};

export default Meta;
