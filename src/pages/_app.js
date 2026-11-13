import { Teachers } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import { MenuTogglerProvider } from '@/context/MenuToggleContext';
import { SmoothScrollProvider } from '@/context/SmoothScrollContext';
import '@/styles/globals.css';

const teachers = Teachers({
  subsets: ['latin', 'latin-ext'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-teachers: ${teachers.style.fontFamily};
        }
      `}</style>
      <QueryClientProvider client={queryClient}>
        <SmoothScrollProvider>
          <MenuTogglerProvider>
            <Component {...pageProps} />
          </MenuTogglerProvider>
        </SmoothScrollProvider>
        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: '14px',
              maxWidth: '500px',
              padding: '14px 22px',
              backgroundColor: 'var(--color-white)',
              color: 'var(--color-black)',
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}
