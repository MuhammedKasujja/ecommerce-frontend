import { Outlet } from "react-router-dom";
import {
  Sidebar,
  Navbar,
} from "src/components";

function App() {
  return (
    <>
      <div className="h-screen p-0 overflow-hidden bg-slate-200">
        <div className="flex h-full">
          <Sidebar />

          {/* Main Content */}
          <div className="flex flex-col w-full">
            <Navbar profileMenu={<>Kasujja Muhammed</>} />
            <main className="p-4 overflow-y-auto">
              {/* <div className="py-3">
                <Breadcrumb
                  items={[
                    { label: "Home" },
                    { label: "Users", isActive: true },
                    { label: "Muhammed" },
                  ]}
                />
              </div> */}

              <div className="flex flex-wrap items-start w-full gap-4 p-4 rounded-lg bg-slate-300 ">
                <Outlet></Outlet>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
