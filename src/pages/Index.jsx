import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Our Application</h1>
      <p className="mb-4">Get started by registering or logging in.</p>
      <div className="space-x-4">
        <Link to="/register">
          <Button>Register</Button>
        </Link>
        <Link to="/login">
          <Button variant="outline">Login</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;