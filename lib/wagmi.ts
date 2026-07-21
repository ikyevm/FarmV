import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { mainnet } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'FarmV',
    projectId: 'YOUR_PROJECT_ID',
      chains: [mainnet],
        transports: {
            [mainnet.id]: http(),
              },
                ssr: true,
                });
                