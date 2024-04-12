import multer from "multer";
import path from "path";
import axios from "axios";

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: path.join(process.cwd(), "pages/api", "uploads"),
  filename: (req, file, callback) => {
    const staticFilename = "uploaded_file"; // Static filename
    const fileExtension = path.extname(file.originalname);
    const filename = `${staticFilename}${fileExtension}`;
    callback(null, filename);
  },
});

const upload = multer({ storage });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      upload.single("file")(req, res, async (err) => {
        if (err) {
          console.error("Error handling file upload:", err);
          return res
            .status(500)
            .json({ error: "An unexpected error occurred" });
        }

        // Forward the uploaded file to the specified endpoint
        try {
          const response = await axios.post(
            "http://localhost:1999/api/AskFileSave",
            {
              file: req.file,
            }
          );

          console.log("File saved successfully:", response.data);

          // Return the response from the endpoint
          res.status(200).json({ filePath: response.data.filePath });
        } catch (error) {
          console.error("Error posting file to AskFileSave:", error);
          res.status(500).json({ error: "An unexpected error occurred" });
        }
      });
    } catch (error) {
      console.error("Error handling file upload:", error);
      res.status(500).json({ error: "An unexpected error occurred" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
