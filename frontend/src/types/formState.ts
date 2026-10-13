import { type RoleCreate } from "./role";

export interface RoleFormState {
  values: RoleCreate;
  errors: Record<keyof RoleCreate, string>;
  isFormValid: boolean;
}

export type RoleFormAction =
  | {
      type: "CHANGE_FIELD";
      payload: { name: keyof RoleCreate; value: string };
    }
  | { type: "RESET_FORM" };
