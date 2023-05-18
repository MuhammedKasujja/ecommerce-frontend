import { Button, Card, TextField } from "src/components";

const Login: React.FC = () => {
  return (
    <div className="grid place-items-center h-screen bg-slate-200">
      <div className="m-auto w-4/5 max-w-md md:w-2/5">
        <Card>
          <form className="flex flex-col gap-4">
            <TextField placeholder="email" label="Email" />
            <TextField
              type="password"
              placeholder="password"
              label="Password"
            />
            <Button>Login</Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
