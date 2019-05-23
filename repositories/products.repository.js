import { MongoDataSource } from "../config/mongo.data-source.js";

export class ProductsRepository {

    constructor( ) {
        this.dataSource = undefined;
        this.onInit();
    }

    async onInit() {
        this.dataSource = await MongoDataSource;
    }

    async findAll() {
        const products = await this.dataSource.collection('products').find({}).toArray();
        return products;
    }
}