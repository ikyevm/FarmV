// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract FarmVProfile {
        
            struct Profile {
                        string displayName;
                                string badge;          // Contoh: "Sovereign IDcard"
                                        uint256 joinDate;      // Timestamp saat mendaftar
                                                
                                                        // Statistik Ternak (Livestock)
                                                                uint256 totalCowID;    
                                                                        uint256 totalSold;     
                                                                                uint256 totalPurchased;
                                                                                        
                                                                                                bool isRegistered;
            }

                mapping(address => Profile) public userProfiles;

                    // Event untuk ditangkap oleh Next.js
                        event ProfileCreated(address indexed wallet, string displayName, string badge);
                            event LivestockUpdated(address indexed wallet, uint256 totalCowID);

                                // Fungsi Mendaftar
                                    function createProfile(string memory _displayName, string memory _badge) public {
                                                require(!userProfiles[msg.sender].isRegistered, "Wallet sudah memiliki profil!");

                                                        userProfiles[msg.sender] = Profile({
                                                                        displayName: _displayName,
                                                                                    badge: _badge,
                                                                                                joinDate: block.timestamp, // Mengambil waktu jaringan saat ini
                                                                                                            totalCowID: 0,
                                                                                                                        totalSold: 0,
                                                                                                                                    totalPurchased: 0,
                                                                                                                                                isRegistered: true
                                                        });

                                                                emit ProfileCreated(msg.sender, _displayName, _badge);
                                    }

                                        // Fungsi update jumlah ternak (Nanti bisa dipanggil otomatis oleh Contract CowID)
                                            function updateCowStats(address _user, uint256 _totalCowID, uint256 _sold, uint256 _purchased) public {
                                                        // Catatan: Idealnya fungsi ini diproteksi (onlyOwner/onlyContract) agar tidak dimanipulasi
                                                                require(userProfiles[_user].isRegistered, "Profil tidak ditemukan");
                                                                        
                                                                                userProfiles[_user].totalCowID = _totalCowID;
                                                                                        userProfiles[_user].totalSold = _sold;
                                                                                                userProfiles[_user].totalPurchased = _purchased;
                                                                                                        
                                                                                                                emit LivestockUpdated(_user, _totalCowID);
                                            }

                                                // Fungsi untuk Next.js membaca data profil
                                                    function getProfile(address _user) public view returns (Profile memory) {
                                                                require(userProfiles[_user].isRegistered, "Profil belum terdaftar");
                                                                        return userProfiles[_user];
                                                    }
}

                                                    }
                                            }
                                                        })
                                    }
            }
}