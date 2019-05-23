import { DataSource } from "../config/DataSource.js";

export class TesteRepository {
    findAll() {
        return DataSource.data;
    }
}