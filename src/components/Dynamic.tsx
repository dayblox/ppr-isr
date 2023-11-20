import { headers } from "next/headers";

export async function Dynamic() {
  const header = headers().get("test");

  return <div>{header}</div>;
}
