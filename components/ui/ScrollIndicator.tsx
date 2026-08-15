import { ScrollDownIcon } from "@/components/ui/icons";

export function ScrollIndicator() {
  return (
    <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex">
      <span className="text-label uppercase tracking-[0.2em] text-text/70">Role para explorar</span>
      <ScrollDownIcon className="h-9 w-6 animate-bounce text-text/60" />
    </div>
  );
}
