import { useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Store, AuthActions } from "core/store";

function useAuth() {
  const dispatch = useDispatch<Store.AppDispatch>();

  const user = useSelector((state: Store.RootState) => state.auth.user);
  const fetching = useSelector((state: Store.RootState) => state.auth.fetching);

  const fetchUser = useCallback(
    (userId: number) => {
      return dispatch(AuthActions.fetchUser(userId)).unwrap();
    },
    [dispatch]
  );

  return {
    user,
    fetchUser,
    fetching,
  };
}

export default useAuth;
