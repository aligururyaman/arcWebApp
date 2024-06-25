'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
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
  const [fadeIn, setFadeIn] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    const adminUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (userName === adminUsername && password === adminPassword) {
      setIsDialogOpen(false);  // Dialogu kapat
      router.push('/adminPanel');
    } else {
      alert("Yanlış kullanıcı adı veya şifre!");
    }
  };

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <div className='mt-10 w-full'>
      <div className='h-1 w-full border-b border-gray-500' />
      <div className='m-5 flex flex-row space-x-4 justify-end items-center'>
        <div className='flex flex-col space-y-3'>
          <div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="link" onClick={() => setIsDialogOpen(true)}>
                  <div className='text-xs text-gray-400'>
                    <h1>Panel</h1>
                  </div>
                </Button>
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
          </div>
        </div>
        <div>
          <div className='text-xs text-gray-400'>
            <h1>Copyright © Tüm Hakları Saklıdır.</h1>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
