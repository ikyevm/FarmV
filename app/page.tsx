// Pastikan nama file MintCow sesuai dengan yang ada di folder components Abang (huruf besar/kecilnya)
import MintCow from '../components/MintCow'; 

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center py-10">
            <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                              Mulai Peternakan Digitalmu! 🐄
                                      </h2>
                                              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                                        Koneksikan wallet-mu, cetak (mint) NFT sapi pertamamu, dan jadilah peternak Web3 sejati di jaringan IOPn Testnet.
                                                                </p>
                                                                      </div>
                                                                            
                                                                                  {/* Ini akan memunculkan UI Minting Sapi yang udah Abang buat */}
                                                                                        <MintCow />
                                                                                            </div>
                                                                                              );
                                                                                              }
                                                                                              