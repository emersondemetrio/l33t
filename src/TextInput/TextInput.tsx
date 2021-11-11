import { ChangeEvent, useState } from 'react';
import { removeDiacritics } from '../services/diacritics';
import { toL33t } from '../services/useL33t';

export const TextInput = ({
  onUpdate
}: {
  onUpdate: (text: string) => void
}) => {
  const [currentValue, setCurrentValue] = useState('');

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const clean = removeDiacritics(event.target.value);
    setCurrentValue(clean);
    onUpdate(toL33t(clean));
  };

  const reset = () => {
    onUpdate('');
    setCurrentValue('');
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h3 className="flex-1 text-lg font-medium text-gray-700">
          Raw text
        </h3>

        <button
          type="button"
          onClick={reset}
          className="bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Reset
        </button>
      </div>

      <div className="mt-1 mt-4 relative rounded-md shadow-sm">
        <textarea
          autoFocus
          rows={4}
          value={currentValue}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-4 sm:text-sm border-gray-300 rounded-md"
          placeholder="WRITE HERE!"
          onChange={handleTextChange}
        />
      </div>
    </div>
  );
}
