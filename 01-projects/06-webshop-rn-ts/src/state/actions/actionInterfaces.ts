import { ActionType } from '../action-types';

// Generic Action Inteface => no recommended
export interface GenericAction {
  type: string;
  payload?: any;
}

export interface SearchRepositoriesAction {
  type: 'search_repositories';
}

export interface SearchRepositoriesSuccessAction {
  type: 'search_repositories_success';
  payload: string[];
}

export interface SearchRepositoriesErrorAction {
  type: 'search_repositories_error';
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
