import { MenuTogglerProvider } from '@/context/MenuToggleContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SmoothScrollProvider } from '@/context/SmoothScrollContext';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScrollProvider>
        <MenuTogglerProvider>
          <Component {...pageProps} />
        </MenuTogglerProvider>
      </SmoothScrollProvider>
    </QueryClientProvider>
  );
}
