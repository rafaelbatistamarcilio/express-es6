import { DataSource } from "../config/DataSource.js";
import { TesteRepository } from "../repositories/teste.repository.js";

export class TesteService {
    constructor() {
        this.repository = new TesteRepository();
    }

    teste() {
        return this.repository.findAll();
    }

    findById(id) {
        return this.teste().filter(item => item.id === id);
    }

    save(data) {
        data.id = new Date().getTime();
        DataSource.data.push(data);
        return this.teste();
    }
}