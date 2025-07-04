import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";
  const isBusiness = session?.user?.isBusiness || false;

  return {
    session,
    status,
    isAuthenticated,
    isLoading,
    isBusiness,
    login,
    logout,
    user: session?.user,
  };
} 