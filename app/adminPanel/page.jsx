'use client';
import React, { useState, useEffect } from 'react';
import { db, storage } from '@/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from '@/components/ui/textarea';

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
  const [desc, setDesc] = useState("");
  const [files, setFiles] = useState(Array(5).fill(null));
  const [mekan, setMekan] = useState("");

  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleFileChange = (index, file) => {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  };

  const handleSubmit = async () => {
    try {
      const fileUrls = await Promise.all(
        files.map(async (file, index) => {
          if (file) {
            const fileRef = ref(storage, `images/${file.name}`);
            await uploadBytes(fileRef, file);
            return await getDownloadURL(fileRef);
          }
          return null;
        })
      );

      const docRef = await addDoc(collection(db, "adminData"), {
        title,
        desc,
        mekan,
        fileUrls: fileUrls.filter(url => url !== null), // Remove null entries
        timestamp: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Veriler başarıyla kaydedildi!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Veriler kaydedilirken bir hata oluştu!");
    }
  };

  return (
    <div className='mt-10'>
      <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} px-16 my-10`}>
        <h1 className='text-3xl'>Admin Panel.</h1>
      </div>
      <div className='flex flex-row  border-2 border-accent'>
        <div className='h-[30rem] w-[30rem] m-16 '>
          <div className='w-96 flex flex-col space-y-7'>
            <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} `}>
              <h1 className='text-3xl'>Resimler</h1>
            </div>
            {Array.from({ length: 5 }).map((_, index) => (
              <Input
                key={index}
                className="text-black"
                type="file"
                onChange={(e) => handleFileChange(index, e.target.files[0])}
              />
            ))}
          </div>
        </div>
        <div className='h-[30rem] w-[30rem] m-16 '>
          <div className='w-96 flex flex-col space-y-7'>
            <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} `}>
              <h1 className='text-3xl'>Bilgiler</h1>
            </div>
            <Select onValueChange={setMekan}>
              <SelectTrigger className="w-[180px] text-black">
                <SelectValue placeholder="Mekan Seç." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Mekan Seç.</SelectLabel>
                  <SelectItem value="icmekan">İç Mekan</SelectItem>
                  <SelectItem value="disMekan">Dış Mekan</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Input className="text-black" type="text" placeholder="Başlık" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Textarea className="text-black" placeholder="Açıklama" value={desc} onChange={(e) => setDesc(e.target.value)} />
          </div>
        </div>
      </div>
      <div>
        <Button variant="destructive" onClick={handleLogout}>Çıkış</Button>
        <Button variant="primary" onClick={handleSubmit}>Kaydet</Button>
      </div>
    </div>
  );
}

export default Footer;
