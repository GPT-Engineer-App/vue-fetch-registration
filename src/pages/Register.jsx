import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { useDataStore } from "@/stores/dataStore";

const Register = () => {
  const store = useDataStore();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    store.setRegisterObj({
      ...store.registerObj,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (store.registerObj.password !== store.registerObj.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/rent/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: store.registerObj.username,
          email: store.registerObj.email,
          password: store.registerObj.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      toast.success("Registration successful");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                value={store.registerObj.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={store.registerObj.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={store.registerObj.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={store.registerObj.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-primary">
              Login
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;