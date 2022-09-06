/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (

    <div class={tw`bg-red-100 w-screen flex items-center justify-content h-screen`}>
      <Head>
        <meta name="viewport" content="initial-scale=1" />
        <link href="apple-touch-icon.png"
        sizes="180x180"
        rel="apple-touch-icon" />
      </Head>
      <h1 class={tw`text-center w-full text-[10vw]`}>Jason ❤️ Jill</h1>
    </div>
  );
}
