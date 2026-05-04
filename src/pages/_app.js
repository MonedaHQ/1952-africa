import { MenuTogglerProvider } from '@/context/MenuToggleContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SmoothScrollProvider } from '@/context/SmoothScrollContext';
import { Teachers } from 'next/font/google';
import '@/styles/globals.css';
import { Toaster } from 'react-hot-toast';

const teachers = Teachers({
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <div className={`${teachers.variable} ${teachers.className}`}>
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
    </div>
  );
}
