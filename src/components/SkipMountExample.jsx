import { useEffect, useRef, useState } from 'react';

// 1. ❌ Использование рефа для отмены эффекта при монтировании
// 2. ❌ StrictMode - ответный удар
// 3. ✅ Проверка значений для отмены эффекта при монтировании
// 4. ✅ Отмена HTTP-запросов для отмены эффекта при монтировании

export const SkipMountExample = () => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    console.log(`Fetching data with query: ${searchQuery}`);
  }, [searchQuery]);

  return (
    <div>
      <h1>SkipMountExample</h1>
      <button onClick={() => setSearchQuery('Mango')}>Populate query</button>
    </div>
  );
};
