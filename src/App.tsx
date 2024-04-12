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
      <div className="h-full overflow-auto bg-gradient-to-b from-gray-800 from-10% via-sky-950 via-40% to-gray-900 to-90%">
        <MainPage />
      </div>
    </>
  );
}
