import express from "express";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "image-" + Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({ storage: storage });
import {

  createArticle,
  getAllArticals,

  getArticalById,
  deleteArtical,
  updateArtical,
} from "../controllers/articleController.js";

const articalRoutes = express.Router();

// GET all artical
articalRoutes.get("/view-all", getAllArticals);

// GET artical by id
articalRoutes.post("/view-by-id/",  getArticalById);


// POST a new artical
articalRoutes.post("/add", upload.single("image"), createArticle);

// DELETE a artical
articalRoutes.delete("/delete", deleteArtical);

// UPDATE a artical
articalRoutes.patch("/edit", upload.single("image"), updateArtical);

export default articalRoutes;
