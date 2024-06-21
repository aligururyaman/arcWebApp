'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function Footer() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleLogin = () => {
    const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (userName === adminUsername && password === adminPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Yanlış kullanıcı adı veya şifre!");
    }
  };
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className='m-10'>
      {!isLoggedIn ? (
        <Dialog>
          <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} px-16 my-10`}>
            <h1 className='text-3xl'>Lütfen Giriş Yapın.</h1>
          </div>
          <DialogTrigger asChild className='mx-16'>
            <Button variant="outline" className="bg-white text-accent">Admin Panel</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] text-black">
            <DialogHeader>
              <DialogTitle>Admin Panel</DialogTitle>
              <DialogDescription>
                Dosya yüklemek için giriş yapın
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Kullanıcı Adı
                </Label>
                <Input id="name" value={userName} onChange={(e) => setUserName(e.target.value)} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Şifre
                </Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="button" onClick={handleLogin}>Giriş Yap</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : (
        <AdminPanel setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

function AdminPanel({ setIsLoggedIn }) {
  const [fadeIn, setFadeIn] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className='mt-10'>
      <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} px-16 my-10`}>
        <h1 className='text-3xl'>Admin Panel.</h1>
      </div>
      <div className=''>
        <div className='h-[30rem] w-[30rem] m-16 border-2 border-accent'>
          <div className='w-96 text-black m-10 flex flex-col space-y-7'>
            <Input type="text" placeholder="Başlık" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Input id="picture1" type="file" />
            <Input id="picture2" type="file" />
            <Input id="picture3" type="file" />
            <Input id="picture4" type="file" />
            <Input id="picture5" type="file" />
          </div>
        </div>
      </div>
      <div>
        <Button variant="destructive" onClick={handleLogout}>Çıkış</Button>
      </div>
    </div>
  );
}

export default Footer;
