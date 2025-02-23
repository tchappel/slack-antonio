import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { TriangleAlert } from "lucide-react";

import { useAuthActions } from "@convex-dev/auth/react";

export const SignInCard = () => {
  const [step, setStep] = useState<"signUp" | "signIn">("signIn");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const { signIn } = useAuthActions();

  const signInWIthProvider = async (provider: "google" | "github") => {
    setPending(true);
    try {
      await signIn(provider);
    } catch (e) {
      setError("Something went wrong");
      console.error(e);
    } finally {
      setPending(false);
    }
  };

  const signInWithPassword = async (formData: FormData) => {
    if (step === "signUp") {
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");

      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
    }

    setPending(true);

    try {
      await signIn("password", formData);
    } catch (e) {
      setError("Something went wrong");
      console.error(e);
    } finally {
      setPending(false);
    }
  };

  return (
    <Card className="w-full h-full p-8">
      <CardHeader className="px-0 pt-0">
        <CardTitle>
          {step === "signIn" ? "Sign in" : "Sign up"} to continue
        </CardTitle>
        <CardDescription>
          Use your email or another service to continue
        </CardDescription>
      </CardHeader>
      {!!error && (
        <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
          <TriangleAlert className="size-4" />
          <p>{error}</p>
        </div>
      )}
      <CardContent className="space-y-5 px-0 pb-0">
        <form
          className="space-y-2.5"
          onSubmit={(event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            signInWithPassword(formData);
          }}
        >
          <Input
            name="email"
            type="email"
            disabled={pending}
            placeholder="Email"
            required
          />
          <Input
            name="password"
            type="password"
            disabled={pending}
            placeholder="Password"
            required
          />
          {step === "signUp" && (
            <Input
              name="confirmPassword"
              type="password"
              disabled={pending}
              placeholder="Confirm password"
              required
            />
          )}
          <input name="flow" type="hidden" value={step} />
          <Button className="w-full" type="submit" size="lg" disabled={false}>
            Continue
          </Button>
        </form>
        <Separator />
        <div className="flex flex-col gap-y-2.5">
          <Button
            disabled={pending}
            onClick={() => signInWIthProvider("google")}
            variant="outline"
            size="lg"
            className="w-full relative"
          >
            <FcGoogle className="size-5 absolute top-3 left-2.5" />
            Continue with Google
          </Button>
          <Button
            disabled={pending}
            onClick={() => signInWIthProvider("github")}
            variant="outline"
            size="lg"
            className="w-full relative"
          >
            <FaGithub className="size-5 absolute top-3 left-2.5" />
            Continue with GitHub
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          {step === "signIn"
            ? "Don&apos;t have an account? "
            : "Already have an account? "}
          <span
            onClick={() => setStep(step === "signIn" ? "signUp" : "signIn")}
            className="text-sky-700 hover:underline cursor-pointer"
          >
            {step === "signIn" ? "Sign up" : "Sign in"}
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
