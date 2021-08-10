import {IHomeRepository, HomeSpecialistModel} from "module-core";
import {HomeService} from "../services/HomeService";

export class HomeRepository implements IHomeRepository {

    private service: HomeService;

    constructor() {
        this.service = new HomeService();
    }

    async fetchData(): Promise<HomeSpecialistModel[]> {
        return await this.service.fetchData();
    }
}
