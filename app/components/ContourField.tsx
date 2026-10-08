// Bathymetric contour lines, generated deterministically so server and client agree.
function field(x: number, y: number) {
  return (
    Math.sin(x * 1.3 + y * 0.7) * 0.5 +
    Math.sin(x * 0.55 - y * 1.1 + 1.7) * 0.8 +
    Math.cos(x * 0.25 + y * 0.35) * 1.1
  );
}

function contourPaths(seed: number, levels: number) {
  const W = 1600;
  const H = 900;
  const paths: string[] = [];
  for (let l = 0; l < levels; l++) {
    const base = (l / levels) * H * 1.3 - 120;
    const pts: string[] = [];
    for (let i = 0; i <= 64; i++) {
      const x = (i / 64) * W;
      const nx = (x / W) * 6 + seed;
      const y =
        base +
        field(nx, l * 0.18 + seed) * 70 +
        Math.sin(nx * 0.9 + l * 0.22) * 26;
      pts.push(`${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`);
    }
    paths.push(pts.join(" "));
  }
  return paths;
}

const a = contourPaths(0.4, 26);
const b = contourPaths(3.1, 18);

export default function ContourField() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <svg
        className="contour-a absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {a.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="#8ea0b4"
            strokeOpacity={i % 5 === 0 ? 0.32 : 0.14}
            strokeWidth={i % 5 === 0 ? 1.4 : 1}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <svg
        className="contour-b absolute inset-0 h-full w-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {b.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="#e8590c"
            strokeOpacity={i === 9 ? 0.85 : 0.06}
            strokeWidth={i === 9 ? 1.6 : 1}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_60%,transparent_0%,var(--abyss)_75%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-abyss to-transparent" />
    </div>
  );
}
