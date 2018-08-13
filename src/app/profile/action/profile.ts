import { Action } from '@ngrx/store';
export const GET_INIT = '[Get] INIT ';
export const GET_INIT_SUCCESS = '[Get] INIT  Success';
export const GET_INIT_FAILED = '[Get] INIT  Failed';

export class GetInit implements Action {
  readonly type = GET_INIT;
  constructor() {}
}

export class GetInitSuccess implements Action {
  readonly type = GET_INIT_SUCCESS;

  constructor(public payload: any) {}
}

export class GetInitFailed implements Action {
  readonly type = GET_INIT_FAILED;
  constructor() {}
}

export type Actions = GetInit | GetInitSuccess | GetInitFailed;
