// // Import necessary modules and models
import db from "../models/index.js";
import sequelize from "sequelize";

const { ArticleModel } = db;

///// add Artical
export const createArticle = async (req, res) => {
  try {
    // Destructure data from request body
    const { image, title, category, body, author } = req.body;

    // Create a new Artical record
    const newArticle = await TransactionModel.create({
      image,
      title,
      category,
      body,
      author,
    });

    // Respond with a success message
    res.status(201).json({
      message: "Transaction created successfully",
      transaction: newTransaction,
    });
  } catch (error) {
    // Respond with an error message
    res.status(500).json({ error: error.message });
  }
};

//////// get all Articals
export const getAllArticals = async (req, res) => {
  try {
    const articals = await ArticleModel.findAll({});

    res.status(200).json(articals);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//// // // // get artical by  id
export const getArticalById = async (req, res) => {
  const id = req.body.id;

  try {
    const artical = await TransactionModel.findAll({
      where: { categoryId: categoryId },
    });

    res.status(200).json(artical);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//delete Artical
export const deleteArtical = async (req, res) => {
  const id = req.body.id;

  try {
    const deleteArtical = await ArticleModel.findByPk(id);
    if (!deleteArtical) {
      return res.status(404).json({ message: "artical not found" });
    }

    await deleteArtical.destroy();
    res.status(200).json({ message: "artical deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update Artical
export const updateArtical = async (req, res) => {
  const id = req.body.id;
  const { image, title, category, body, author } = req.body;
  try {
    const UpdateArtical = await ArticleModel.findByPk(id);
    if (!UpdateArtical) {
      return res.status(404).json({ message: "artical not found" });
    }

    await UpdateArtical.update({
      image,
      title,
      category,
      body,
      author,
    });
    res.status(200).json({ message: "artical updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
