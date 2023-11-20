import { Dynamic } from "@/components/Dynamic";
import { Suspense } from "react";

export default async function Page() {
  const { unixtime } = await (
    await fetch("http://worldtimeapi.org/api/timezone/Europe/Paris", {
      next: { revalidate: 2 }, // Triggers hydration errors when revalidating
    })
  ).json();

  return (
    <div>
      {/* Enables PPR for the page */}
      <Suspense>
        {/* uses dynamic functions like headers() */}
        <Dynamic />
      </Suspense>

      {unixtime}
    </div>
  );
}
