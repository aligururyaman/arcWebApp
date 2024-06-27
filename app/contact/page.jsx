'use client';
import React, { useEffect, useState } from 'react'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';


function Contact() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleClick = (platform) => {
    switch (platform) {
      case 'whatsapp':
        window.open('https://wa.me/+905413887554', '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/galatasaray', '_blank');
        break;
      case 'x':
        window.open('https://twitter.com/galatasaraySK', '_blank');
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} px-16 my-10`}>
        <h1 className='text-3xl'>İletişim.</h1>
      </div>
      <div className=''>

        <div className='flex flex-col xl:flex-row space-y-16 m-10 '>
          <div className='xl:h-[30rem] xl:w-[70rem] flex flex-col gap-5 rounded-xl bg-slate-700 px-10 py-10 md:grid-cols-2'>
            <div className='xl:flex flex-row gap-10'>
              <div>
                <Label htmlFor="firstName">Ad</Label>
                <Input type="firstname" placeholder="Ad" className="w-72 bg-primary" />
              </div>

              <div>
                <Label htmlFor="lastName">Soyad</Label>
                <Input type="lastname" placeholder="Soyad" className="w-72 bg-primary" />
              </div>
            </div>
            <div>
              <Label htmlFor="email">E-Mail</Label>
              <Input type="email" placeholder="E-Mail" className="w-96 bg-primary" />
            </div>
            <div>
              <Label htmlFor="msg">Mesajınız</Label>
              <Textarea className="bg-primary" placeholder="Mesajınız..." />
            </div>
            <div className='flex justify-end py-5'>
              <Button>Gönder</Button>
            </div>
          </div>
          <div className='h-48 xl:w-[35rem] w-full rounded-xl bg-slate-700 flex flex-row justify-center overflow-hidden xl:m-28'>

            <div className='flex flex-row gap-3 justify-center items-center p-10'>
              <div className='flex flex-col items-center justify-center p-10 gap-3' onClick={() => handleClick('whatsapp')}>
                <FaWhatsapp size={40} />
                <p>Whatsapp</p>
              </div>
              <div className='flex flex-col items-center justify-center p-10 gap-3' onClick={() => handleClick('instagram')}>
                <FaInstagram size={40} />
                <p>İnstagram</p>
              </div>
              <div className='flex flex-col items-center justify-center p-10 gap-3' onClick={() => handleClick('x')}>
                <BsTwitterX size={40} />
                <p>X</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;
