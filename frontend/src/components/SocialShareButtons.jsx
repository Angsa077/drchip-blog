import React from 'react';
import {
    FaFacebookSquare,
    FaWhatsappSquare,
    FaInstagramSquare,
} from "react-icons/fa";

import {
    FaSquareXTwitter,
} from "react-icons/fa6";

const SocialShareButtons = ({ url, title }) => {
    return (
        <div className='w-full flex justify-between'>
            <a target='blank' rel='noreferrer' href={`https://api.whatsapp.com/send/?text=${url}`}>
                <FaWhatsappSquare className='text-[#25d366] w-12 h-auto' />
            </a>
            <a target='blank' rel='noreferrer' href="https://www.instagram.com/drchip.id/">
                <FaInstagramSquare className='text-[#ff91d7] w-12 h-auto' />
            </a>
            <a target='blank' rel='noreferrer' href={`https://www.facebook.com/dialog/share?app_id=1056103909081123&display=popup&href=${url}`}>
                <FaFacebookSquare className='text-[#3b5998] w-12 h-auto' />
            </a>
            <a target='blank' rel='noreferrer' href={`https://www.twitter.com/intent/tweet?url=${url}`}>
                <FaSquareXTwitter className='text-[#010101] w-12 h-auto' />
            </a>
        </div >
    )
}

export default SocialShareButtons
