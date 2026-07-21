// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FarmVLivestock is ERC721URIStorage, Ownable {
        uint256 private _nextTokenId;

            // Struktur data untuk menyimpan informasi detail setiap sapi
                struct Cow {
                            uint256 id;
                                    bool isHealthy;
                                            uint256 birthTime;
                }

                    // Mapping dari ID Sapi (Token ID) ke Data Sapi
                        mapping(uint256 => Cow) public cows;

                            // Event yang dipancarkan ke blockchain setiap kali sapi baru lahir (dibuat)
                                event CowMinted(address indexed farmer, uint256 indexed cowId);

                                    constructor() ERC721("FarmV Livestock", "COW") Ownable(msg.sender) {}

                                        // Fungsi untuk menciptakan (minting) sapi baru
                                            function mintCow(address farmer, string memory tokenURI) public {
                                                        uint256 tokenId = _nextTokenId++;
                                                                
                                                                        // Simpan data sapi awal di blockchain
                                                                                cows[tokenId] = Cow({
                                                                                                id: tokenId,
                                                                                                            isHealthy: true, // Default sapi baru lahir selalu sehat
                                                                                                                        birthTime: block.timestamp // Catat waktu sapi dibuat
                                                                                });

                                                                                        // Proses cetak NFT ke wallet farmer
                                                                                                _mint(farmer, tokenId);
                                                                                                        
                                                                                                                // Simpan metadata (seperti gambar sapi, ras, dll)
                                                                                                                        _setTokenURI(tokenId, tokenURI);

                                                                                                                                emit CowMinted(farmer, tokenId);
                                            }

                                                // Fungsi untuk mengupdate status kesehatan sapi (misal habis diperiksa dokter hewan)
                                                    function updateHealthStatus(uint256 cowId, bool status) public onlyOwner {
                                                                require(_ownerOf(cowId) != address(0), "Sapi tidak ditemukan!");
                                                                        cows[cowId].isHealthy = status;
                                                    }
}

                                                    }
                                                                                })
                                            }
                }
}