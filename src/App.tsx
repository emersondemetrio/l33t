import { useState } from 'react'
import { Preview } from './Preview/Preview'
import { TextInput } from './TextInput/TextInput'

export const App = () => {
  const [preview, setPreview] = useState('');

  return (
    <>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">(TSX/Tailwind/React) L33ter</h1>
          </div>
        </header>

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <TextInput onUpdate={setPreview} />
          </div>

          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Preview data={preview} />
          </div>
        </main>
      </div>
    </>
  )
}
