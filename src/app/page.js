import HomePage from "./home/page";
import Login from "./login/page";
import Register from "./register/page";


export default function Home() {
  return (
    <main className="">
     <Register/>
     <Login/>
     <HomePage/>
    </main>
  );
}
