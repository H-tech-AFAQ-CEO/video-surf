import { createFileRoute } from "@tanstack/react-router";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteHeader, TideLines } from "@/components/site-shell";
import topTurn from "@/assets/surf-top-turn.jpg";
import barrel from "@/assets/surf-barrel.jpg";
import paddle from "@/assets/surf-paddle.jpg";

export const Route = createFileRoute("/spot")({
  head: () => ({ meta: [
    { title: "Pererenan Surf Captures | video.surf" },
    { name: "description", content: "Browse recent surf photos and videos from Pererenan and book a private photographer." },
    { property: "og:title", content: "Pererenan Surf Captures | video.surf" },
    { property: "og:description", content: "Browse recent surf photos and videos from Pererenan and book a private photographer." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }), component: Spot,
});

const captures = [topTurn, barrel, paddle, topTurn, paddle, barrel, topTurn, paddle, barrel];

function Spot() {
  const [selectedCaptures, setSelectedCaptures] = useState<number[]>([]);
  const toggleCapture = (index: number) => setSelectedCaptures((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  return <main className="min-h-screen bg-background pb-28 sm:pb-16">
    <SiteHeader />
    <section className="relative overflow-hidden border-b border-border">
      <TideLines compact />
      <div className="relative mx-auto grid max-w-7xl gap-7 px-5 py-9 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:px-8 sm:py-12">
        <div><a href="/" className="text-sm font-bold text-primary">← All spots</a><p className="mt-7 text-xs font-bold uppercase text-muted-foreground">Bali · Indonesia</p><h1 className="mt-1 text-4xl font-semibold text-primary sm:text-5xl">Pererenan</h1><p className="mt-3 max-w-xl text-muted-foreground">A powerful river-mouth break with long lefts, quick rights and photographers watching every set.</p></div>
        <Button className="hidden sm:inline-flex">Book a private session</Button>
      </div>
    </section>
    <div className="mx-auto max-w-7xl px-5 py-7 sm:px-8">
      <div className="grid items-center gap-5 border-b border-border pb-6 sm:grid-cols-[minmax(0,1fr)_auto]">
        <div><p className="text-sm font-bold text-primary">{selectedCaptures.length ? `${selectedCaptures.length} captures selected` : "13 captures available"}</p><p className="mt-1 text-sm text-muted-foreground">Choose a date, then select every wave that is yours.</p></div>
        <div className="grid grid-cols-[44px_minmax(0,1fr)_44px] items-center rounded-full border border-border bg-card p-1"><Button variant="ghost" size="icon" aria-label="Previous day"><ChevronLeft /></Button><span className="min-w-0 truncate px-3 text-center text-sm font-bold">July 04, 2026</span><Button variant="ghost" size="icon" aria-label="Next day"><ChevronRight /></Button></div>
      </div>
      <section className="py-7"><div className="mb-4 flex items-baseline gap-3"><h2 className="text-2xl font-semibold text-primary">7:00</h2><span className="text-sm text-muted-foreground">9 captures</span></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{captures.map((src, i) => <button key={i} onClick={() => toggleCapture(i)} aria-pressed={selectedCaptures.includes(i)} className={`group relative aspect-[4/3] overflow-hidden rounded-lg border-2 bg-card text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${selectedCaptures.includes(i) ? "border-primary" : "border-border"}`}><img src={src} alt={`Surf capture at ${7 + Math.floor(i / 4)}:${String(14 + i * 3).padStart(2,"0")}`} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"/><span className="absolute right-2 top-2 grid size-7 place-items-center rounded-full bg-primary/90 text-primary-foreground"><Check className="size-4"/></span><span className="absolute bottom-2 left-2 rounded-full bg-card/90 px-2 py-1 text-xs font-bold">07:{String(14 + i * 3).padStart(2,"0")}</span></button>)}</div></section>
      <aside className="grid gap-5 border-t border-border py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"><div><h2 className="text-2xl font-semibold text-primary">No one in the water with a camera?</h2><p className="mt-2 max-w-xl text-muted-foreground">Book a photographer around the tide that works for you. They come to your spot and deliver every keepable wave.</p></div><Button>Book a private session</Button></aside>
    </div>
  </main>;
}
