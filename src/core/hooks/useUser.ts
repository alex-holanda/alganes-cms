import { useCallback, useState } from "react";

import { User, UserService } from "alex-holanda-sdk";

export default function useUser() {
  const [user, setUser] = useState<User.Detailed>();

  const fetchUser = useCallback(async (userId: number) => {
    UserService.getDetailedUser(userId).then(setUser);
  }, []);

  return {
    user,
    fetchUser,
  };
}
