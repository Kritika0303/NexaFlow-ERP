// src/components/ui/SectionHeader.tsx
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  align = 'center',
  theme = 'light',
  className,
}: SectionHeaderProps) {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div className={cn(isCenter ? 'text-center' : 'text-left', 'max-w-3xl', isCenter && 'mx-auto', className)}>
      {badge && (
        <div className={cn('inline-flex items-center gap-2 mb-4')}>
          <span className={cn(
            'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase',
            isDark
              ? 'bg-brand-500/20 text-brand-300 border border-brand-500/30'
              : 'bg-brand-50 text-brand-600 border border-brand-200'
          )}>
            {badge}
          </span>
        </div>
      )}

      <h2 className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4',
        isDark ? 'text-white' : 'text-slate-900'
      )}>
        {titleHighlight ? (
          <>
            {title}{' '}
            <span className="gradient-text-blue">{titleHighlight}</span>
          </>
        ) : (
          title
        )}
      </h2>

      {description && (
        <p className={cn(
          'text-lg leading-relaxed',
          isDark ? 'text-slate-400' : 'text-slate-600'
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
