/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (

    <div class={tw`bg-red-100 w-screen flex items-center justify-content overflow-hidden h-screen`}>
      <Head>
        <meta name="viewport" content="initial-scale=1,width=device-width, minimal-ui" />
        <link href="apple-touch-icon.png"
        sizes="180x180"
        rel="apple-touch-icon" />
        <title>Jason Loves Jill</title>
      </Head>
      <h1 class={tw`text-center w-full text-[10vw] flex flex-col `}>
        <span>Jason</span>
        <span class={tw`text-[15vw]`}>❤️</span>
        <span>Jill</span>
      </h1>
    </div>
  );
}
