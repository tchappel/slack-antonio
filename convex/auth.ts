import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";
import { DataModel } from "./_generated/dataModel";

// this is needed to add name field to the user profile when signing up with email/password
// this part alone seems enough to add the name field to the user profile.
// Check if I need also to customize users table. Check the docs:
// https://labs.convex.dev/auth/config/passwords#customize-user-information
// https://labs.convex.dev/auth/setup/schema#customizing-the-users-table
const CustomPassword = Password<DataModel>({
  profile(params) {
    return {
      email: params.email as string,
      name: params.name as string,
    };
  },
});

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [GitHub, Google, CustomPassword],
});
