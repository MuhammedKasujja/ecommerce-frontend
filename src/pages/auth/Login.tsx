import { useState } from "react";
import { AuthService } from "src/api";
import { Button, Card, TextField } from "src/components";
import { LoginDTO } from "src/types";

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginDTO>();
  const [isClicked, setIsClicked] = useState(0);
  const { loading, error, data } = AuthService.login(credentials!, isClicked);

  const handleChange = (data: Record<string, any>) => {
    setCredentials((prevData) => ({ ...prevData!, ...data }));
  };

  return (
    <div className="grid place-items-center h-screen bg-slate-200">
      <div className="m-auto w-4/5 max-w-md md:w-2/5">
        <Card>
          <form className="flex flex-col gap-4">
            {error && (
              <div className="text-red-600 bg-red-100 p-1 rounded">{error}</div>
            )}
            <TextField
              placeholder="email"
              label="Email"
              onChange={(value) => handleChange({ email: value })}
              required
            />
            <TextField
              type="password"
              placeholder="password"
              label="Password"
              onChange={(value) => handleChange({ password: value })}
              required
            />
            <Button
              type="button"
              isLoading={loading}
              onClick={(_) => {

                setIsClicked((prev) => ++prev);
              }}
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
