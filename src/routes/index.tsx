import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteHeader, TideLines } from "@/components/site-shell";
import mapImage from "@/assets/pererenan-map.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Find Your Surf Videos | video.surf" },
    { name: "description", content: "Explore surf spots and find the photos and videos photographers captured of your waves." },
    { property: "og:title", content: "Find Your Surf Videos | video.surf" },
    { property: "og:description", content: "Explore surf spots and find the photos and videos photographers captured of your waves." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

const defaultSpot = { name: "Pererenan", captures: 13, x: "37%", y: "39%" };
const spots = [
  defaultSpot,
  { name: "Seseh", captures: 24, x: "28%", y: "29%" },
  { name: "Echo Beach", captures: 38, x: "45%", y: "48%" },
  { name: "Batu Bolong", captures: 96, x: "68%", y: "68%" },
];

function Home() {
  const [selected, setSelected] = useState(defaultSpot);
  return <main className="min-h-screen overflow-hidden bg-background">
    <SiteHeader />
    <section className="relative">
      <TideLines />
      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-10 sm:px-8 sm:pb-12 sm:pt-16">
        <div className="grid items-end gap-8 sm:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-bold uppercase text-primary">Surf Bali, frame by frame</p>
            <h1 className="max-w-xl text-4xl font-semibold leading-tight text-primary sm:text-6xl">Find the waves you rode.</h1>
            <p className="mt-4 max-w-xl text-lg text-muted-foreground">Photographers are already on the beach. Pick a spot to find your videos, or book someone just for you.</p>
          </div>
          <div className="grid gap-3 sm:min-w-60">
            <Button asChild><a href="#map">Find your videos</a></Button>
            <Button variant="outline" asChild><Link to="/spot">Book a photographer</Link></Button>
          </div>
        </div>

        <div id="map" className="relative mt-10 overflow-hidden rounded-xl border border-border bg-card shadow-[0_20px_60px_-35px_color-mix(in_oklab,var(--foreground)_35%,transparent)] sm:mt-14">
          <div className="absolute left-4 right-4 top-4 z-20 mx-auto flex min-h-12 max-w-md items-center gap-3 rounded-full border border-border bg-card/90 px-5 backdrop-blur-sm">
            <Search className="size-4 shrink-0 text-muted-foreground" />
            <span className="text-sm font-semibold text-muted-foreground">Search a spot</span>
          </div>
          <img src={mapImage} alt="Illustrated map of surf spots along the Bali coastline" width={1600} height={912} className="h-[500px] w-full object-cover sm:h-[580px]" />
          {spots.map((spot) => <button key={spot.name} onClick={() => setSelected(spot)} aria-label={`Select ${spot.name}`} className="absolute z-10 size-11 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-card bg-primary shadow-lg transition-transform hover:scale-110" style={{ left: spot.x, top: spot.y }} />)}
          <div className="absolute inset-x-3 bottom-3 z-20 rounded-lg border border-border bg-card/90 p-4 backdrop-blur-md sm:inset-x-auto sm:bottom-5 sm:left-5 sm:w-80">
            <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
              <div className="min-w-0"><h2 className="truncate text-xl font-semibold text-primary">{selected.name}</h2><p className="text-sm text-muted-foreground">{selected.captures} captures available today</p></div>
              <Button asChild><Link to="/spot">Open spot</Link></Button>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">Select a marker, then open the spot directly.</p>
      </div>
    </section>
  </main>;
}