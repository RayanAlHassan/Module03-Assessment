// import { Model } from "sequelize";
import pkg from "sequelize";
const { Model } = pkg;
export default (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Article.init(
    {
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      category: DataTypes.STRING,
      body: DataTypes.TEXT,
      author: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Article",
    }
  );
  return Article;
};
