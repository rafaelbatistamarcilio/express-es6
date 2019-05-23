import Application from 'express';
import { TesteService } from '../../services/teste.service.js';
import { ProductsRepository } from '../../repositories/products.repository.js';

export const TesteController = Application.Router();
const testeService = new TesteService();
const productsRepository = new ProductsRepository();

TesteController.get('/products', async (req, res) => {
    const products = await productsRepository.findAll();
    res.send(products);
});

TesteController.get('/:id(\\d+)', async (req, res) => {
    const item = testeService.findById(Number(req.params.id));
    res.send(item);
});

TesteController.get('/', async (req, res) => {
    res.send(testeService.teste());
});

TesteController.post('/', async (req, res) => {
    res.send(testeService.save(req.body));
});

