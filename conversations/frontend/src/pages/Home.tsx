import Sidebar from "../components/Sidebar";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>
      <div
        style={{
          position: "absolute",
        }}
      >
        <Sidebar />
        Home page
      </div>
    </MainLayout>
  );
}

export default Home;
