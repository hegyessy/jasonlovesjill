/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto bg-red-100 w-screen flex items-center justify-content h-screen`}>
      <h1 class={tw`text-center w-full text-3xl`}>Jason ❤️ Jill</h1>
    </div>
  );
}
