import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SiteHeader, TideLines } from "@/components/site-shell";

export const Route = createFileRoute("/studio")({
  head: () => ({ meta: [
    { title: "Photographer Studio | video.surf" },
    { name: "description", content: "Manage surf sessions, captures, prices and bookings in the video.surf photographer studio." },
    { property: "og:title", content: "Photographer Studio | video.surf" },
    { property: "og:description", content: "Manage surf sessions, captures, prices and bookings in the video.surf photographer studio." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Studio,
});

const shoots = [
  ["Batu Bolong (Old Man's)", "August 09, 2026", "24 captures", "Published"],
  ["Uluwatu", "August 09, 2026", "24 captures", "Published"],
  ["Pererenan", "August 08, 2026", "13 captures", "Published"],
  ["Seseh", "August 08, 2026", "18 captures", "Processing"],
  ["Batu Bolong (Old Man's)", "August 07, 2026", "24 captures", "Published"],
  ["Uluwatu", "August 07, 2026", "24 captures", "Published"],
];

function Studio() {
  return <main className="min-h-screen bg-background">
    <SiteHeader studio />
    <section className="relative overflow-hidden border-b border-border"><TideLines compact /><div className="relative mx-auto grid max-w-7xl gap-6 px-5 py-9 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:px-8 sm:py-12"><div><p className="text-xs font-bold uppercase text-muted-foreground">Photographer workspace</p><h1 className="mt-1 text-4xl font-semibold text-primary sm:text-5xl">Made Surf Shots</h1><p className="mt-3 text-muted-foreground">Your sessions, captures and earnings — ready before the next tide.</p></div><div className="flex gap-3"><Button variant="outline">Edit profile</Button><Button>New shoot</Button></div></div></section>
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8">
      <section className="grid grid-cols-3 gap-3 border-b border-border pb-7"><Stat value="192" label="Captures"/><Stat value="10" label="Views"/><Stat value="4" label="Sales"/></section>
      <section className="py-7"><div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4"><div><h2 className="text-2xl font-semibold text-primary">Recent shoots</h2><p className="mt-1 text-sm text-muted-foreground">Latest sessions across your published spots.</p></div><Button variant="outline" className="hidden sm:inline-flex">Share availability</Button></div>
        <div className="mt-5 overflow-hidden rounded-lg border border-border bg-card">{shoots.map(([name,date,count,status]) => <div key={`${name}-${date}`} className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 border-b border-border p-4 last:border-0 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center"><div className="min-w-0"><h3 className="truncate font-sans text-sm font-bold text-primary">{name}</h3><p className="mt-1 text-xs text-muted-foreground">{date} · Photo Rp 75,000 · Video Rp 150,000</p></div><span className="hidden text-sm text-muted-foreground sm:block">{count}</span><span className={`rounded-full px-3 py-1 text-xs font-bold ${status === "Published" ? "bg-secondary text-primary" : "bg-accent/10 text-accent"}`}>{status}</span></div>)}</div>
      </section>
    </div>
  </main>;
}

function Stat({ value, label }: { value: string; label: string }) { return <div className="border-r border-border last:border-0"><p className="font-serif text-3xl font-semibold text-primary sm:text-4xl">{value}</p><p className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</p></div>; }