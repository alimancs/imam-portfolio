import React from 'react';

function cx(...parts: Array<string | undefined | false | null>): string {
  return parts.filter(Boolean).join(' ');
}

/* ---------------------------------------------------------------- *
 * Wikipedia-ish design tokens
 * ---------------------------------------------------------------- */

// Body copy: 15px / 1.65, near-black
const bodyText = 'text-sm text-white';

// Links: standard wiki blue, purple when visited, underline on hover
const linkStyles =
  '[&_a]:text-[#3366cc] [&_a]:no-underline [&_a:visited]:text-[#795cb2] [&_a:hover]:underline [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-[#3366cc]';

// Paragraph / list rhythm
const proseSpacing =
  '[&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mb-1';

// Serif headings, normal weight (Wikipedia never uses bold headings)
const headingStyles = 'tracking-tight text-white';

/* ---------------------------------------------------------------- *
 * FlowSection — a plain article section with a ruled heading
 * ---------------------------------------------------------------- */

export interface FlowSectionProps {
  id?: string;
  /** Optional section heading, rendered as an <h2> with a rule. */
  title?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  'aria-label'?: string;
}

export const FlowSection: React.FC<FlowSectionProps> = ({
  id,
  title,
  className,
  style,
  children,
  'aria-label': ariaLabel,
}) => (
  <section
    id={id}
    aria-label={ariaLabel}
    style={style}
    className={cx('mb-9 scroll-mt-4 border-l-2 border-l-zinc-500 hover:border-l-blue-600 pl-4 last:mb-0', className)}
  >
    {title ? (
      <h2
        className={cx(
          headingStyles,
          'mb-2 text-md font-semibold',
        )}
      >
        {title}
      </h2>
    ) : null}

    <div className={cx(bodyText, linkStyles, proseSpacing)}>{children}</div>
  </section>
);

/* ---------------------------------------------------------------- *
 * FlowArt — the article shell
 * ---------------------------------------------------------------- */

export interface FlowArtProps {
  /** Optional article title, rendered as the page <h1>. */
  title?: string;
  children: React.ReactNode;
  className?: string;
  'aria-label'?: string;
}

const FlowArt: React.FC<FlowArtProps> = ({
  title,
  children,
  className,
  'aria-label': ariaLabel = 'Project showcase',
}) => {
  return (
    <main
      aria-label={ariaLabel}
      className={cx(
        'w-full font-sans text-white antialiased',
        className,
      )}
    >
      <div className="mx-auto w-[90%] md:w-[50%] px-4 md:px-0 sm:py-8">
        {title ? (
          <span
            className={cx(
              headingStyles,
              'mb-2 text-xl tracking-tight',
            )}
          >
            {title}
          </span>
        ) : null}

        <div className={cx(bodyText, linkStyles, proseSpacing)}>{children}</div>
      </div>
    </main>
  );
};

export default FlowArt;