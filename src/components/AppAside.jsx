import { ScrollArea } from "./ui/scroll-area";

export default function AppAside({ children }) {
  return (
    <aside className="hidden lg:flex w-80 border-l border-border bg-muted/40 flex-shrink-0 h-full flex-col">
      <ScrollArea className="flex-1">
        <div className="p-6">{children}</div>
      </ScrollArea>
    </aside>
  );
}
