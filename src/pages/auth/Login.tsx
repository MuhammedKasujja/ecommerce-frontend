import { useEffect, useState } from "react";
import { AuthService } from "src/api";
import { Button, Card, TextField } from "src/components";
import { useFetch } from "src/hooks/useFetch";
import { LoginDTO } from "src/types";

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginDTO>();
  const [isClicked, setIsClicked] = useState(0);
  const { loading, error, data } = useFetch(
    "http://127.0.0.1:8000/api/admin/login",
    { type: "POST", data: credentials, dependes: isClicked }
  );

  const handleChange = (data: Record<string, any>) => {
    setCredentials((prevData) => ({ ...prevData!, ...data }));
  };

  useEffect(() => {}, [isClicked]);

  const submit = (e: any) => {
    e.preventDefault();
    // const { loading, error, data } = useFetch("http://127.0.0.1:8000/api/admin/login", { type: "POST", data: credentials, dependes: true });//AuthService.login(credentials!);
    console.log({ loading, error, data });
  };
  return (
    <div className="grid place-items-center h-screen bg-slate-200">
      <div className="m-auto w-4/5 max-w-md md:w-2/5">
        <Card>
          <form className="flex flex-col gap-4" onSubmit={submit}>
            <TextField
              placeholder="email"
              label="Email"
              onChange={(value) => handleChange({ email: value })}
            />
            <TextField
              type="password"
              placeholder="password"
              label="Password"
              onChange={(value) => handleChange({ password: value })}
            />
            <Button
              isLoading={loading}
              onClick={(_) => setIsClicked((prev) => ++prev)}
              // onClick={(_)=>AuthService.login(credentials!)}
            >
              Login
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
