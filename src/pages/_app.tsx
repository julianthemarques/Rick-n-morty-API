import { Header } from '@components/Header';
import { FiltersProvider } from '@contexts/filters';
import { LayoutProvider } from '@contexts/layout';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>App</title>
      </Head>
      <LayoutProvider>
        <FiltersProvider>
          <Header />
          <Component {...pageProps} />
        </FiltersProvider>
      </LayoutProvider>
    </>
  );
};

export default MyApp;
