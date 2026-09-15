import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Wordmark({ studio = false }: { studio?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-baseline gap-1 font-serif text-xl font-bold text-primary" aria-label="video.surf home">
      <span>video</span><span className="text-accent">.surf</span>{studio && <span className="ml-1 font-sans text-xs font-bold uppercase text-muted-foreground">Studio</span>}
    </Link>
  );
}

export function SiteHeader({ studio = false }: { studio?: boolean }) {
  return (
    <>
      <header className="relative z-30 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:h-20 sm:px-8">
          <Wordmark studio={studio} />
          <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary navigation">
            <Button variant="ghost" asChild><Link to="/">Explore</Link></Button>
            <Button variant="ghost" asChild><Link to="/spot">Saved waves (1)</Link></Button>
            <Button variant="ghost" asChild><Link to="/studio">Studio</Link></Button>
            <Button variant="outline">Cart (2)</Button>
          </nav>
          <Button variant="outline" size="icon" className="sm:hidden" aria-label="Open menu"><Menu /></Button>
        </div>
      </header>
      <nav className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-border bg-card/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur sm:hidden" aria-label="Mobile navigation">
        <Link to="/" className="rounded-md px-2 py-2 text-center text-xs font-bold text-primary">Explore</Link>
        <Link to="/spot" className="rounded-md px-2 py-2 text-center text-xs font-bold text-primary">Saved waves</Link>
        <Link to="/studio" className="rounded-md px-2 py-2 text-center text-xs font-bold text-primary">Studio</Link>
      </nav>
    </>
  );
}

export function TideLines({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 top-0 overflow-hidden ${compact ? "h-36" : "h-64"}`} aria-hidden="true">
      <div className="absolute left-0 top-10 h-px w-full bg-primary/20" />
      <div className="absolute left-0 top-16 h-px w-full bg-primary/10" />
      <div className="tide-drift absolute -left-10 top-6 h-24 w-[120%] rounded-[50%] border border-primary/15" />
      <div className="tide-drift absolute -right-16 top-20 h-32 w-[120%] rounded-[50%] border border-primary/10 [animation-duration:24s]" />
    </div>
  );
}
