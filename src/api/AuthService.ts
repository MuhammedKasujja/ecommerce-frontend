import { useFetch } from "src/hooks/useFetch";
import { LoginDTO } from "src/types";

export class AuthService {
  static login(credentials: LoginDTO, count: number) {
    return useFetch("/login", {
      type: "POST",
      data: credentials,
      dependes: count,
    });
  }
}
