import { put } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

// .env yükleme
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const uploadImages = async () => {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  
  if (!token) {
    console.error('HATA: BLOB_READ_WRITE_TOKEN bulunamadı.');
    process.exit(1);
  }

  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const files = fs.readdirSync(imagesDir).filter(file => file.endsWith('.png') || file.endsWith('.jpg'));

  console.log(`${files.length} görsel yükleniyor...`);

  const results: Record<string, string> = {};

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const fileBuffer = fs.readFileSync(filePath);
    
    console.log(`Yükleniyor: ${file}...`);
    const blob = await put(`mymanti/${file}`, fileBuffer, {
      access: 'public',
      token: token,
      addRandomSuffix: false // Aynı isimle yüklensin
    });
    
    console.log(`Tamamlandı: ${blob.url}`);
    results[file] = blob.url;
  }

  console.log('\n--- TÜM URL LİSTESİ ---');
  console.log(JSON.stringify(results, null, 2));
};

uploadImages().catch(console.error);
