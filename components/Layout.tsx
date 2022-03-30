import Head from 'next/head';
import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  id?: string;
  title?: string;
  description?: string;
}

function Layout(props: LayoutProps): JSX.Element {
  const title = props.title ?? 'Bryan Pan';
  const description = props.description ?? 'I build beautiful solutions through software and design';
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Bryan Pan" />
        <meta name="description" content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bryanpan.co/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://res.cloudinary.com/bryanpan/image/upload/v1614200405/metadata_lyr06q.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://res.cloudinary.com/bryanpan/image/upload/v1614200405/metadata_lyr06q.png" />

        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id={props.id}>
        {props.children}
      </main>
    </>
  );
}

export default Layout;
