import {SpecialistActionModel} from "./SpecialistActionModel";

export interface SpecialistModel {
  name: string;
  description: string;
  distance: number;
  actions: SpecialistActionModel;
}
