
class DataSourceFactory {
    constructor() {
        this.data = [
            { id: 1, nome: 'Teste usuário' },
            { id: 3, nome: 'Teste usuário 2' }
        ]
    }
}

export const DataSource = new DataSourceFactory();