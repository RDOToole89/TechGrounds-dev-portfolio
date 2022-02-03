import { Action } from '../actions/actionInterfaces';
import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';

export const searchRepositories = (term: string) => {
  // * NOTE AT BOTTOM
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get('https://api.npms.io/v2/search', {
        params: {
          q: term,
        },
      });
      console.log('DATA', data);
      const names = data.results.map((result: any) => result.package.name);
      console.log('NAMES', names);

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      });
    }
  };
};

// NOTE 1:
// Take the dispatch Type and feed it our action type Alias
//  return async (dispatch: Dispatch<ActionAlias>)
// export type Action =
//   | SearchRepositoriesAction
//   | SearchRepositoriesSuccessAction
//   | SearchRepositoriesErrorAction;
