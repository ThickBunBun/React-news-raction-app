import MainPage from "./pages/main_page";
import Login from "./pages/login";

export default function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = MainPage;
      break;
    case "/login":
      Component = Login;
      break;
  }

  return (
    <>
      <MainPage />
    </>
  );
}
