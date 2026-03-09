import WordCounter from './WordCounter';
import { RefreshCw, Copy, Check, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown'; // 1. Import ReactMarkdown

export default function Editor({
  label,
  value,
  onChange,
  placeholder,
  isReadOnly = false,
  loading = false,
  onClear,
  onCopy,
  copied
}) {
  return (
    <div className={`
      group relative rounded-2xl overflow-hidden flex flex-col
      border transition-all duration-300
      bg-white/3 backdrop-blur-sm
      ${isReadOnly
        ? 'border-white/[0.07] hover:border-indigo-500/40'
        : 'border-white/[0.07] hover:border-blue-500/40 focus-within:border-blue-500/60 focus-within:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]'
      }
    `}>
      {/* Subtle top gradient line omitted for brevity */}

      {/* Header omitted for brevity */}

      {/* Text Area */}
      <div className="relative h-80 overflow-y-auto"> {/* Add overflow-y-auto here */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            {/* Loader animation omitted for brevity */}
            <p className="text-sm text-slate-500 animate-pulse tracking-wide">Refining your ideas...</p>
          </div>
        ) : isReadOnly ? (
          /* 2. Render Markdown for the output pane */
          <div className="prose prose-invert prose-slate max-w-none px-5 py-5 text-sm leading-relaxed text-slate-200">
            <ReactMarkdown>{value || placeholder}</ReactMarkdown>
          </div>
        ) : (
          /* 3. Keep standard textarea for the input pane */
          <textarea
            className="w-full h-full px-5 py-5 focus:outline-none resize-none text-sm leading-relaxed
              placeholder:text-slate-700 text-slate-200 bg-transparent cursor-text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
          />
        )}
      </div>

      {/* Footer omitted for brevity */}
    </div>
  );
}