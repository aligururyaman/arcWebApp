'use client';
import React, { useState, useEffect } from 'react';
import { db, storage } from '@/firebaseConfig';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Button } from "@/components/ui/button";
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

function AdminPanel() {
  const [fadeIn, setFadeIn] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [files, setFiles] = useState(Array(5).fill(null));
  const [mekan, setMekan] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setFadeIn(true);
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const querySnapshot = await getDocs(collection(db, "adminData"));
    const fetchedProjects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setProjects(fetchedProjects);
  };

  const handleFileChange = (index, file) => {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  };

  const handleSubmit = async () => {
    try {
      const fileUrls = await Promise.all(
        files.map(async (file) => {
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
      fetchProjects();
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Veriler kaydedilirken bir hata oluştu!");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "adminData", id));
      alert("Proje başarıyla silindi!");
      fetchProjects();
    } catch (e) {
      console.error("Error deleting document: ", e);
      alert("Proje silinirken bir hata oluştu!");
    }
  };

  return (
    <div className='mt-10'>
      <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'} px-16 my-10`}>
        <h1 className='text-3xl'>Admin Panel.</h1>
      </div>
      <div className='flex flex-row border-2 border-accent'>
        <div className='h-[30rem] w-[30rem] m-16'>
          <div className='w-96 flex flex-col space-y-7'>
            <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
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
        <div className='h-[30rem] w-[30rem] m-16'>
          <div className='w-96 flex flex-col space-y-7'>
            <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
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
        <div className='h-[30rem] w-[30rem] m-16'>
          <div className='w-96 flex flex-col space-y-7'>
            <div className={`transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className='text-3xl'>Projeler</h1>
            </div>
            <div className='flex flex-col gap-2'>
              {projects.map(project => (
                <div key={project.id} className="flex justify-between items-center">
                  <span>{project.title}</span>
                  <Button variant="destructive" onClick={() => handleDelete(project.id)}>Sil</Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-4 mt-4">
        <Button variant="destructive" onClick={() => setIsLoggedIn(false)}>Çıkış</Button>
        <Button variant="secondary" onClick={handleSubmit}>Kaydet</Button>
      </div>
    </div>
  );
}

export default AdminPanel;
