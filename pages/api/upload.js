import fs from 'fs';
import path from 'path';
import multiparty from 'multiparty';

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

export default async function uploadHandler(req, res) {
  if (req.method === 'POST') {
    const form = new multiparty.Form({ uploadDir });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error('Error parsing form:', err);
        return res.status(500).json({ error: 'Failed to process upload' });
      }

      try {
        // Ensure the uploads directory exists
        fs.mkdirSync(uploadDir, { recursive: true });

        // Move the uploaded file(s) to the uploads directory
        const fileKeys = Object.keys(files);
        fileKeys.forEach((key) => {
          const file = files[key][0];
          const filePath = path.join(uploadDir, file.originalFilename);
          fs.renameSync(file.path, filePath);
        });

        res.status(200).json({ message: 'File uploaded successfully' });
      } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Failed to upload file' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
