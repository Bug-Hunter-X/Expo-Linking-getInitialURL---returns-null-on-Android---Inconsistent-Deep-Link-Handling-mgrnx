This solution uses `Linking.addEventListener` to handle the deep link instead of relying solely on `getInitialURL`.  This approach ensures the deep link is always caught.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const handleUrlChange = ({ url }) => {
      setInitialUrl(url);
    };

    Linking.addEventListener('url', handleUrlChange);

    return () => {
      Linking.removeEventListener('url', handleUrlChange);
    };
  }, []);

  useEffect(() => {
    if (initialUrl) {
      // Handle the deep link here
      console.log('Deep Link:', initialUrl);
    }
  }, [initialUrl]);

  return (
    <View style={styles.container}>
      {/* Your app content here */}
      {initialUrl && <Text>Deep link: {initialUrl}</Text>}
    </View>
  );
}
```