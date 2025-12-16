import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "../AppSidebar";
import AppHeader from "../AppHeader";
import AppAside from "../AppAside";

export default function MainLayout({ children, asideContent }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <div className="flex flex-1 flex-col">
          <AppHeader />
          <div className="flex flex-1 overflow-hidden">
            <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
              {children}
            </main>
            {asideContent && <AppAside>{asideContent}</AppAside>}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
