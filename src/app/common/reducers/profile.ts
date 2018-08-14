import * as Action from '../action/profile/profile';
import { Profile } from '../../profile/service/model/profile';

export interface State {
  isLoading: boolean;
  isLoadSuccess: boolean;
  profiles: Profile;
}

export const initialState: State = {
  isLoading: false,
  isLoadSuccess: false,
  profiles: {
    overview: {
      name: '',
      description: ''
    },
    experience: [],
    projects: []
  }
};

export const initialProfile: Profile = {
  overview: {
    name: '',
    description: ''
  },
  experience: [],
  projects: []
};

export function reducer(state = initialState, action: Action.Actions): State {
  switch (action.type) {
    case Action.GET_INIT: {
      return {
        ...state,
        isLoading: true,
        isLoadSuccess: false,
        profiles: { ...initialProfile }
      };
    }

    case Action.GET_INIT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isLoadSuccess: true,
        profiles: action.payload.profile
      };
    }

    case Action.GET_INIT_FAILED: {
      return {
        ...state,
        isLoading: false,
        isLoadSuccess: false,
        profiles: { ...initialProfile }
      };
    }

    default: {
      return state;
    }
  }
}
