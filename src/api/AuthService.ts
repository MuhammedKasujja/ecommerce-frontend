import { useState } from "react";
import { useFetch } from "src/hooks/useFetch";
import { LoginDTO } from "src/types";

export class AuthService {
  static login(credentials: LoginDTO, count: number) {
    return useFetch("http://127.0.0.1:8000/api/admin/login", { type: "POST", data: credentials, dependes: count });
  }
}
