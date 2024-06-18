import { PageContainer } from "./LoginPage.styles";
import { Grid, TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCallback } from "react";

import { User, AuthResponse, AuthLoginResponse, NewUser } from "../../../types";
import { login, createUser } from "../../../api";


type FormValues = {
  email: string,
  password: string,
}

const LoginPage = () => {

  const form = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const { register, handleSubmit, formState } = form;
  const {errors} = formState;

  const onSubmit = ( data: FormValues) => {

    const userData = {
      username: data.email,
      password: data.password,
    }
    userLogin(userData)
    console.log(userData)
  }
  
    // ACT 9 - Use the login and register APIs

  /**login**/
  const userLogin = useCallback(
    async (user: User) => {
      const onSuccess = async (data:AuthLoginResponse) => {
        console.log("login data",data)
      };
      await login({ user, onSuccess});
    },
    []
  );
  /**login**/

  /**login**/
  const resgister = useCallback(
    async (newUser: NewUser) => {
      const onSuccess = async (data:AuthResponse) => {
        console.log("AuthResponse",data)
      };
      await createUser({ newUser, onSuccess});
    },
    []
  );
  /**login**/

  return (
    <PageContainer container>
      <Grid item md={8} xs={8} lg={8}>
        {/* ACT 8 - Create a form to Login and SignUp */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2} >
            <TextField label="Email" type="email"
              {...register("email", {required:"email is required"})}
              error= {!!errors.email}
              helperText={errors.email?.message}  
            >
            </TextField>
            <TextField label="Password" type="password"
              {...register("password", {required:"password is required"})}
              error= {!!errors.password}
              helperText={errors.password?.message}                
            >
            </TextField>
            <Button type="submit" variant="contained">Login</Button>
            <Button type="submit" variant="outlined">Sign Up</Button>
          </Stack>
        </form>
      </Grid>
    </PageContainer>
  );
};

export default LoginPage;
