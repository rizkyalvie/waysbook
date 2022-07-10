const { books, users } = require("../../models");

// Add new product
exports.addBooks = async (req, res) => {
  try {
    
    const data = {
      title: req.body.title,
      publicationdate: req.body.date,
      pages: req.body.pages,
      isbn: req.body.isbn,
      author: req.body.author,
      price: req.body.price,
      description: req.body.desc,
      promobook: req.body.promobook,
      bookattachment: req.files['bookattachment'][0].filename,
      thumbnail: req.files['thumbnail'][0].filename,
      idUser: req.user.id,
    };

    let newBook = await books.create(data);


    let bookData = await books.findOne({
      where: {
        id: newBook.id,
      },
      include: [
        {
          model: users,
          as: 'users',
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'password'],
          },
        }
      ],
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'idUser'],
      },
    });
    
    bookData = JSON.parse(JSON.stringify(bookData));

    res.send({
      status: 'success...',
      data: {
        ...bookData,
        bookattachment: process.env.PATH_FILE + bookData.bookattachment,
        thumbnail: process.env.PATH_FILE + bookData.thumbnail
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: 'failed',
      message: 'Server Error',
    });
  }
};

// // Fetch all products
// exports.getAllProducts = async (req, res) => {
//   try {
//     let data = await products.findAll({
//       include: [
//         {
//           model: users,
//           as: "users",
//           attributes: {
//             exclude: ["createdAt", "updatedAt", "password"],
//           },
//         },
//         {
//           model: category,
//           as: "categories",
//           through: {
//             model: categoryproduct,
//             as: "bridge",
//             attributes: [],
//           },
//           attributes: {
//             exclude: ["createdAt", "updatedAt"],
//           },
//         },
//       ],
//       attributes: {
//         exclude: ["createdAt", "updatedAt", "idUser"],
//       },
//     });

//     data = data.map((item) => {
//       item.image = 'http://localhost:5000/uploads/' + item.image

//       return item
//     })

//     res.send({
//       status: "success...",
//       data,
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: "failed",
//       message: "Server Error",
//     });
//   }
// };

// // Fetch product by id
// exports.getProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     let data = await products.findOne({
//       where: {
//         id,
//       },
//       include: [
//         {
//           model: users,
//           as: 'users',
//           attributes: {
//             exclude: ['createdAt', 'updatedAt', 'password'],
//           },
//         },
//         {
//           model: category,
//           as: 'categories',
//           through: {
//             model: categoryproduct,
//             as: 'bridge',
//             attributes: [],
//           },
//           attributes: {
//             exclude: ['createdAt', 'updatedAt'],
//           },
//         },
//       ],
//       attributes: {
//         exclude: ['createdAt', 'updatedAt', 'idUser'],
//       },
//     });

//     data = JSON.parse(JSON.stringify(data));

//     data = {
//       ...data,
//       image: process.env.PATH_FILE + data.image,
//     };

//     res.send({
//       status: 'success...',
//       data,
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: 'failed',
//       message: 'Server Error',
//     });
//   }
// };

// // Update product by id
// exports.updateProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     let { categoryId } = req.body;
//     categoryId = await categoryId.split(',');

//     const data = {
//       name: req?.body?.name,
//       desc: req?.body?.desc,
//       price: req?.body?.price,
//       image: req?.file?.filename,
//       qty: req?.body?.qty,
//       idUser: req?.user?.id,
//     };

//     await categoryproduct.destroy({
//       where: {
//         idProduct: id,
//       },
//     });

//     let productCategoryData = [];
//     if (categoryId != 0 && categoryId[0] != '') {
//       productCategoryData = categoryId.map((item) => {
//         return { idProduct: parseInt(id), idCategory: parseInt(item) };
//       });
//     }

//     if (productCategoryData.length != 0) {
//       await categoryproduct.bulkCreate(productCategoryData);
//     }

//     await products.update(data, {
//       where: {
//         id,
//       },
//     });

//     res.send({
//       status: 'success',
//       data: {
//         id,
//         data,
//         productCategoryData,
//         image: req?.file?.filename,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: 'failed',
//       message: 'Server Error',
//     });
//   }
// };

// // Delete product by id
// exports.deleteProduct = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await products.destroy({
//       where: {
//         id,
//       },
//     });

//     await categoryproduct.destroy({
//       where: {
//         idProduct: id,
//       },
//     });

//     res.send({
//       status: 'success',
//       message: `Delete product id: ${id} finished`,
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: 'failed',
//       message: 'Server Error',
//     });
//   }
// };
