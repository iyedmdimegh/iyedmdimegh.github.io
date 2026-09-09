'use client';

import { useState } from 'react';
import { t, type Locale, type Schematic as SchematicData } from '@/content';

/**
 * Scale two of the world's single drawing: the hero's node field zoomed in far
 * enough that the nodes have labels and the edges carry current.
 *
 * The current runs the real data path and nothing else — where data does not
 * flow, no current is drawn. Every stage is focusable and says what it does.
 */
export function Schematic({
  schematic,
  locale,
  label,
}: {
  schematic: SchematicData;
  locale: Locale;
  label: string;
}) {
  const [active, setActive] = useState<string | null>(null);
  const current = schematic.nodes.find((n) => n.id === active);

  const toneVar = (tone?: 'ok' | 'warn' | 'crit') =>
    tone === 'ok' ? 'var(--ok)' : tone === 'warn' ? 'var(--warn)' : tone === 'crit' ? 'var(--crit)' : 'var(--cyan)';

  return (
    <figure className="m-0">
      <div className="overflow-x-auto">
        <svg
          viewBox={schematic.viewBox}
          role="img"
          aria-label={label}
          className="block h-auto w-full min-w-[560px]"
        >
          {schematic.wires.map((d) => (
            <path key={d} d={d} fill="none" stroke="var(--rule)" strokeWidth={1.2} />
          ))}

          <path
            className="flow-path"
            d={schematic.flow}
            fill="none"
            stroke="var(--magenta)"
            strokeWidth={2}
            strokeLinecap="round"
          />

          {schematic.nodes.map((node) => {
            const on = active === node.id;
            const accent = toneVar(node.tone);
            return (
              <g
                key={node.id}
                tabIndex={0}
                role="button"
                aria-pressed={on}
                aria-label={`${node.label}. ${t(node.note, locale)}`}
                className="cursor-pointer outline-none"
                onMouseEnter={() => setActive(node.id)}
                onFocus={() => setActive(node.id)}
                onClick={() => setActive(on ? null : node.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActive(on ? null : node.id);
                  }
                }}
              >
                <rect
                  x={node.x}
                  y={node.y}
                  width={node.w}
                  height={node.h}
                  fill={on ? 'var(--raise)' : 'transparent'}
                  stroke={on ? accent : 'var(--rule)'}
                  strokeWidth={on ? 1.8 : 1.1}
                  className="transition-[stroke,fill] duration-200"
                />
                {/* The state marker: one node per stage, lit by its own tone. */}
                <circle cx={node.x + 9} cy={node.y + 11} r={2.6} fill={accent} opacity={on ? 1 : 0.6} />
                <text
                  x={node.x + 18}
                  y={node.y + 15}
                  fill="var(--ink)"
                  className="font-[family-name:var(--font-data)] text-[8.5px] tracking-[0.04em]"
                >
                  {node.label}
                </text>
                {node.sub && (
                  <text
                    x={node.x + 18}
                    y={node.y + 29}
                    fill="var(--ink-3)"
                    className="font-[family-name:var(--font-data)] text-[7px]"
                  >
                    {node.sub}
                  </text>
                )}
              </g>
            );
          })}

          {schematic.callouts?.map((c) => (
            <text
              key={t(c.text, locale)}
              x={c.x}
              y={c.y}
              fill="var(--magenta)"
              className="font-[family-name:var(--font-data)] text-[7.5px] tracking-[0.08em]"
            >
              {t(c.text, locale)}
            </text>
          ))}
        </svg>
      </div>

      <figcaption className="mt-4 border-t border-[var(--rule)] pt-3">
        <p
          aria-live="polite"
          className="t-measure min-h-[3.2em] text-[14px] leading-relaxed text-[var(--ink-2)]"
        >
          {current ? (
            <>
              <span className="t-data mr-2 text-[var(--cyan)]">{current.label}</span>
              {t(current.note, locale)}
            </>
          ) : (
            t(schematic.caption, locale)
          )}
        </p>
      </figcaption>
    </figure>
  );
}
