// src/RescueCenterDAO.js

import { ethers } from 'ethers';

const contractABI = [/* ABI from your compiled contract */];
const contractAddress = 'YOUR_CONTRACT_ADDRESS';

export const getContract = (signerOrProvider) => new ethers.Contract(contractAddress, contractABI, signerOrProvider);
