'use client';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { type Chain } from 'viem';

// 1. Definisi Jaringan IOPn Testnet
const iopnTestnet = {
  id: 984,
    name: 'IOPn Testnet',
      nativeCurrency: { name: 'IOPN', symbol: 'IOPN', decimals: 18 },
        rpcUrls: {
            default: { http: ['https://testnet-rpc.iopn.tech'] },
              },
                blockExplorers: {
                    default: { name: 'IOPNScan', url: 'https://testnet.iopn.tech' },
                      },
                        testnet: true,
                        } as const satisfies Chain;

                        // 2. Konfigurasi Wagmi & RainbowKit
                        const config = getDefaultConfig({
                          appName: 'FarmV',
                            projectId: 'd99256a01866f283c8828c1d1d0563fe', // Project ID baru Bos Iky
                              chains: [iopnTestnet],
                                ssr: true, // Wajib true untuk Next.js
                                });

                                const queryClient = new QueryClient();

                                export function Providers({ children }: { children: React.ReactNode }) {
                                  return (
                                      <WagmiProvider config={config}>
                                            <QueryClientProvider client={queryClient}>
                                                    <RainbowKitProvider>
                                                              {children}
                                                                      </RainbowKitProvider>
                                                                            </QueryClientProvider>
                                                                                </WagmiProvider>
                                                                                  );
                                                                                  }
                                                                                  