import { resolveAvatarUrl } from '../api/avatar';

interface AvatarProps {
  url: string | null | undefined;
  label: string;
  size?: number;
  className?: string;
}

const SIZE_TEXT: Record<number, string> = {
  8: 'text-xs',
  10: 'text-sm',
  11: 'text-sm',
  20: 'text-xl',
};

/** Avatar image, or a two-letter initials fallback when there isn't one. */
export default function Avatar({ url, label, size = 10, className = '' }: AvatarProps) {
  const resolved = resolveAvatarUrl(url);
  const initials = label.slice(0, 2).toUpperCase();
  const dimension = `${size * 0.25}rem`;
  const textSize = SIZE_TEXT[size] ?? 'text-sm';

  if (resolved) {
    return (
      <img
        src={resolved}
        alt=""
        className={`shrink-0 rounded-full object-cover ${className}`}
        style={{ width: dimension, height: dimension }}
      />
    );
  }

  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary ${textSize} ${className}`}
      style={{ width: dimension, height: dimension }}
    >
      {initials}
    </span>
  );
}
