import '@/styles/globals.css'
import { SessionProvider, getSession } from "next-auth/react";
import { ReactElement } from 'react';
import { GetServerSidePropsContext } from 'next';

interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps): ReactElement {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  return {
    props: {
      session: session ? {
        user: {
          name: session.user?.name,
          email: session.user?.email,
          image: session.user?.image,
        },
        expires: session.expires,
      } : null,
      // Add any other props you want to pass to your components here.
    },
  };
}