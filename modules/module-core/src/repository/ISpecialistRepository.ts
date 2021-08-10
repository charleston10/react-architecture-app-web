import {SpecialistModel} from "../model/SpecialistModel";

export interface ISpecialistRepository {
    fetchData(): Promise<SpecialistModel>;
}
