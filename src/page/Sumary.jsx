// src/Pages/About.jsx
import React, { useState } from 'react';
import Profile from '../image/Profile.png'; // Pastikan path gambar benar
import { FaArrowRightLong } from "react-icons/fa6";
import './stylee/sumary.css';


const  Sumary  = () => {
    
    const [file, setFile] = useState(null);
    

        // Fungsi untuk mengunduh file
        const handleDownload = () => {
        if (file) {
            const url = URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = url;
            link.download = file.name;
            link.click();
            URL.revokeObjectURL(url);
        }
        };
    

    return (
        <div className='ContainerSumary'> 
            <div className='ContainarBox'>
                <div className='borderbox'>
                    <img src={Profile} alt="Profile" className='ProfileImage' />
                </div>
                <div className='TextContent'>
                    <h1>
                    Below, I present a summary of the experiences and skills 
                    I have developed through my previous work.
                    </h1>

                    <h2>- NICE TO MEET YOU -</h2>
                </div>
                

            </div>
            <div className='ContainarBox2'>
                <h1 className='Text'> HELLO, MY   </h1>
                <h1  className='Text'> NAME IS </h1>
                <h1 className='Name'>HAMZAH </h1> 
                <h1  className='Text'> Frontend & UI/UX</h1>
                <div className='Buttondonwload'> 
                <button onClick={handleDownload}>Donwload CV <FaArrowRightLong /> </button>
                </div>
            </div>
        </div>
    );
}

export default Sumary;
