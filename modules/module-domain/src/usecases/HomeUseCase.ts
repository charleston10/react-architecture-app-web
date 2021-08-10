import {HomeSpecialistModel, IHomeRepository} from "module-core";
import {HomeRepository} from "module-data/lib";

class HomeUseCase {
    private repository: IHomeRepository;

    constructor() {
        this.repository = new HomeRepository();
    }

    async fetch(): Promise<HomeSpecialistModel[]> {
        return await this.repository.fetchData();
    }
}
