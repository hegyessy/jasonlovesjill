import Hearts from "../islands/Hearts.tsx";

export default function Home() {
  return (
    <div class="bg-red-100 w-screen flex items-center justify-center overflow-hidden h-screen">
      <img src="/thisisus.png" alt="Jason loves Jill" class="max-h-4/5" />
      <Hearts />
    </div>
  );
}
