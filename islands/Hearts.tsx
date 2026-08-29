import { useEffect, useState } from "preact/hooks";

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
  rise: number;
  drift: number;
  duration: number;
  sway: number;
}

const HEARTS_PER_TAP = 8;
const MAX_HEARTS = 200;

let nextId = 0;

const random = (min: number, max: number) => min + Math.random() * (max - min);

const spawn = (x: number, y: number): Heart[] =>
  Array.from({ length: HEARTS_PER_TAP }, () => ({
    id: nextId++,
    x: x + random(-24, 24),
    y: y + random(-24, 24),
    size: random(16, 40),
    rise: random(160, 420),
    drift: random(12, 48),
    duration: random(1400, 2600),
    sway: random(400, 800),
  }));

export default function Hearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      setHearts((current) =>
        [...current, ...spawn(event.clientX, event.clientY)].slice(-MAX_HEARTS)
      );
    };
    globalThis.addEventListener("pointerdown", onPointerDown);
    return () => globalThis.removeEventListener("pointerdown", onPointerDown);
  }, []);

  const remove = (id: number) =>
    setHearts((current) => current.filter((heart) => heart.id !== id));

  return (
    <div class="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          class="heart"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            fontSize: `${heart.size}px`,
            "--rise": `${heart.rise}px`,
            "--drift": `${heart.drift}px`,
            "--duration": `${heart.duration}ms`,
            "--sway": `${heart.sway}ms`,
          }}
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget) remove(heart.id);
          }}
        >
          <span>❤️</span>
        </span>
      ))}
    </div>
  );
}
