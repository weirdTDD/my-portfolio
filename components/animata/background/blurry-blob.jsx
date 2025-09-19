
export default function BlurryBlob() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="relative w-full h-full">
        {/* Blob 1 */}
        <div
          className="
            absolute -right-16 -top-16 
            h-40 w-40 sm:h-96 sm:w-96 
            rounded-full blur-xl sm:blur-3xl 
            filter animate-pop-blob
            opacity-20 sm:opacity-40 mix-blend-multiply
            transition-all duration-700 ease-in-out
            bg-gradient-to-tr from-blue-300 to-blue-500 
            dark:from-blue-800 dark:to-blue-900
            shadow-[0_0_30px_rgba(59,130,246,0.3)] sm:shadow-[0_0_60px_rgba(59,130,246,0.6)] dark:shadow-none
          "
        />

        {/* Blob 2 */}
        <div
          className="
            absolute -left-16 -bottom-16 
            h-40 w-40 sm:h-96 sm:w-96 
            rounded-full blur-xl sm:blur-3xl 
            filter animate-pop-blob
            opacity-20 sm:opacity-40 mix-blend-multiply
            transition-all duration-700 ease-in-out
            bg-gradient-to-tr from-purple-300 to-purple-500 
            dark:from-purple-800 dark:to-purple-900
            shadow-[0_0_30px_rgba(147,51,234,0.3)] sm:shadow-[0_0_60px_rgba(147,51,234,0.6)] dark:shadow-none
          "
        />

        {/* Extra blobs only on desktop */}
        <div
          className="
            hidden md:block absolute right-72 -top-32
            h-96 w-96 rounded-full blur-3xl filter animate-pop-blob
            opacity-40 mix-blend-multiply
            transition-all duration-700 ease-in-out
            bg-gradient-to-tr from-blue-300 to-blue-500 
            dark:from-blue-800 dark:to-blue-900
            shadow-[0_0_60px_rgba(59,130,246,0.6)] dark:shadow-none
          "
        />
        <div
          className="
            hidden md:block absolute left-72 top-40
            h-96 w-96 rounded-full blur-3xl filter animate-pop-blob
            opacity-40 mix-blend-multiply
            transition-all duration-700 ease-in-out
            bg-gradient-to-tr from-purple-300 to-purple-500 
            dark:from-purple-800 dark:to-purple-900
            shadow-[0_0_60px_rgba(147,51,234,0.6)] dark:shadow-none
          "
        />
      </div>
    </div>
  );
}
