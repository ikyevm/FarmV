import type { Metadata } from 'next';
import '@rainbow-me/rainbowkit/styles.css';
import './globals.css';
import { Providers } from './providers';
// Tambahkan import komponen Profile dari folder components
import Profile from '../components/profile'; 

export const metadata: Metadata = {
  title: 'FarmV | IOPn Testnet',
    description: 'Web3 dApp FarmV built on IOPn Testnet',
    };

    export default function RootLayout({
      children,
      }: Readonly<{
        children: React.ReactNode;
        }>) {
          return (
              <html lang="en">
                    <body className="min-h-screen bg-gray-50 text-gray-900">
                            <Providers>
                                      
                                                {/* --- BAGIAN ATAS (NAVBAR) --- */}
                                                          <header className="w-full bg-white border-b border-gray-200 shadow-sm p-4 sticky top-0 z-50">
                                                                      <div className="max-w-7xl mx-auto flex justify-between items-center">
                                                                                    
                                                                                                  {/* Logo Kiri */}
                                                                                                                <div className="flex items-center gap-2">
                                                                                                                                <span className="text-3xl">🌾</span>
                                                                                                                                                <h1 className="text-2xl font-extrabold text-green-600">
                                                                                                                                                                  FarmV
                                                                                                                                                                                  </h1>
                                                                                                                                                                                                </div>

                                                                                                                                                                                                              {/* Profile Kanan (Tombol Wallet ada di sini) */}
                                                                                                                                                                                                                            <div>
                                                                                                                                                                                                                                             <Profile />
                                                                                                                                                                                                                                                           </div>

                                                                                                                                                                                                                                                                       </div>
                                                                                                                                                                                                                                                                                 </header>

                                                                                                                                                                                                                                                                                           {/* --- KONTEN HALAMAN UTAMA --- */}
                                                                                                                                                                                                                                                                                                     <main className="max-w-7xl mx-auto p-4 mt-4">
                                                                                                                                                                                                                                                                                                                 {children}
                                                                                                                                                                                                                                                                                                                           </main>

                                                                                                                                                                                                                                                                                                                                   </Providers>
                                                                                                                                                                                                                                                                                                                                         </body>
                                                                                                                                                                                                                                                                                                                                             </html>
                                                                                                                                                                                                                                                                                                                                               );
                                                                                                                                                                                                                                                                                                                                               }
                                                                                                                                                                                                                                                                                                                                               