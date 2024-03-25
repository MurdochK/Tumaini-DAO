// src/DonateForm.js

import React, { useState } from 'react';
import { ethers } from 'ethers';
import { getContract } from './RescueCenterDAO';

const DonateForm = ({ provider }) => {
    const [centerAddress, setCenterAddress] = useState('');
    const [amount, setAmount] = useState('');

    const donate = async (e) => {
        e.preventDefault();

        if (!centerAddress || !amount) return;

        try {
            const signer = provider.getSigner();
            const contract = getContract(signer);
            const tx = await contract.donateToCenter(centerAddress, { value: ethers.utils.parseEther(amount) });
            await tx.wait();
            alert('Donation successful!');
        } catch (error) {
            console.error(error);
            alert('Donation failed!');
        }
    };

    return (
        <form onSubmit={donate}>
            <input type="text" value={centerAddress} onChange={(e) => setCenterAddress(e.target.value)} placeholder="Center Address" />
            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount in ETH" />
            <button type="submit">Donate</button>
        </form>
    );
};

export default DonateForm;
