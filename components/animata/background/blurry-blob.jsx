export default function BlurryBlob() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Blob 1 */}
        <div
          className="
            absolute -right-32 -top-28 h-140 w-140 rounded-full blur-3xl filter animate-pop-blob
            opacity-40 mix-blend-multiply
            bg-blue-400 dark:bg-blue-900
            shadow-[0_0_60px_rgba(59,130,246,0.6)] dark:shadow-none
          "
        />
        {/* Blob 2 */}
        <div
          className="
            absolute -left-40 -top-64 h-140 w-140 rounded-full blur-3xl filter animate-pop-blob
            opacity-40 mix-blend-multiply
            bg-purple-400 dark:bg-purple-900
            shadow-[0_0_60px_rgba(147,51,234,0.6)] dark:shadow-none
          "
        />

        <div
          className="
            absolute -right-24 -top-28 h-96 w-96 rounded-full blur-3xl filter animate-pop-blob
            opacity-40 mix-blend-multiply
            bg-blue-400 dark:bg-blue-900
            shadow-[0_0_60px_rgba(59,130,246,0.6)] dark:shadow-none
          "
        />
        {/* Blob 4 */}
        <div
          className="
            absolute -left-40 -top-64 h-96 w-96 rounded-full blur-3xl filter animate-pop-blob
            opacity-40 mix-blend-multiply
            bg-purple-400 dark:bg-purple-900
            shadow-[0_0_60px_rgba(147,51,234,0.6)] dark:shadow-none
          "
        />


        <div
          className="
            absolute right-210 -top-72 h-96 w-96 rounded-full blur-3xl filter animate-pop-blob
            opacity-40 mix-blend-multiply
            bg-blue-400 dark:bg-blue-900
            shadow-[0_0_60px_rgba(59,130,246,0.6)] dark:shadow-none
          "
        />
        {/* Blob 6 */}
        <div
          className="
            absolute left-210 -top-74 h-96 w-96 rounded-full blur-3xl filter animate-pop-blob
            opacity-40 mix-blend-multiply
            bg-purple-400 dark:bg-purple-900
            shadow-[0_0_60px_rgba(147,51,234,0.6)] dark:shadow-none
          "
        />

        <div
          className="
            absolute -left-42 -bottom-42 h-140 w-140 rounded-full blur-3xl filter animate-pop-blob
            opacity-40 mix-blend-multiply
            bg-blue-400 dark:bg-blue-900
            shadow-[0_0_60px_rgba(59,130,246,0.6)] dark:shadow-none
          "
        />
        {/* Blob 8 */}
        <div
          className="
            absolute -right-24 -bottom-74 h-120 w-120 rounded-full blur-3xl filter animate-pop-blob
            opacity-40 mix-blend-multiply
            bg-purple-400 dark:bg-purple-900
            shadow-[0_0_60px_rgba(147,51,234,0.6)] dark:shadow-none
          "
        />

        

        {/*Center Blue*/}
        <div
          className="
            absolute right-240 top-72 h-96 w-96 rounded-full blur-3xl filter animate-pop-blob
            opacity-40 mix-blend-multiply
            bg-blue-400 dark:bg-blue-900
            shadow-[0_0_60px_rgba(59,130,246,0.6)] dark:shadow-none
          "
        />
        {/* Center Purple */}
        <div
          className="
            absolute left-220 top-96 h-96 w-96 rounded-full blur-3xl filter animate-pop-blob
            opacity-40 mix-blend-multiply
            bg-purple-400 dark:bg-purple-900
            shadow-[0_0_60px_rgba(147,51,234,0.6)] dark:shadow-none
          "
        />

      </div>
    </div>
  );
}
