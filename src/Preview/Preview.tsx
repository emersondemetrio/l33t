
export const Preview = ({ data }: { data: string }) => {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(data);
    alert('L33t!')
  }

  return (
    <>
      <div className="flex flex-row justify-between">
        <h3 className="flex-1  text-lg font-medium text-gray-700">
          Output
        </h3>

        <button
          type="button"
          onClick={copyToClipboard}
          className="bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Copy
        </button>
      </div>

      <div className="w-100 h-32 mt-4 overflow-x-auto">
        <div className="h-full border-dotted border-4 border-light-blue-500 whitespace-pre">
          {data}
        </div>
      </div>
    </>
  )
}
