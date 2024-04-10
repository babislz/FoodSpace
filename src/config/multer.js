// Importando Multer
const multer = require('multer');
// Configuração de armazenamento
const userImageMulter = multer.diskStorage({
    // Criar destino de armazenamento
    destination: (req, file, cb) => {
        cb(null, 'public/img/user_image'); // (Caso de erro, Local de destino)
    },
    // Renomear arquivo
    filename: (req, file, cb) => {
        // Criando um novo nome para o arquivo (Data em milisegundos - nome original)
        const fileName = `${new Date().getTime()}-${file.originalname}`;
        // Alterando efetivamente o nome
        cb(null, fileName); // cb = CallBack
    }
});

const productImageMulter = multer.diskStorage({
    // Criar destino de armazenamento
    destination: (req, file, cb) => {
        cb(null, 'public/img/product_images'); // (Caso de erro, Local de destino)
    },
    // Renomear arquivo
    filename: (req, file, cb) => {
        // Criando um novo nome para o arquivo (Data em milisegundos - nome original)
        const fileName = `${new Date().getTime()}-${file.originalname}`;
        // Alterando efetivamente o nome
        cb(null, fileName); // cb = CallBack
    }
});

const restaurantImageMulter = multer.diskStorage({
    // Criar destino de armazenamento
    destination: (req, file, cb) => {
        cb(null, 'public/img/restaurant_imgs'); // (Caso de erro, Local de destino)
    },
    // Renomear arquivo
    filename: (req, file, cb) => {
        // Criando um novo nome para o arquivo (Data em milisegundos - nome original)
        const fileName = `${new Date().getTime()}-${file.originalname}`;
        // Alterando efetivamente o nome
        cb(null, fileName); // cb = CallBack
    }
});
// Exportando configurações
module.exports = { userImageMulter, productImageMulter, restaurantImageMulter};