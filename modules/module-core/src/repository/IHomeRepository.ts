import {HomeSpecialistModel} from "../model/HomeSpecialistModel";

export interface IHomeRepository {
    fetchData(): Promise<HomeSpecialistModel>;
}
