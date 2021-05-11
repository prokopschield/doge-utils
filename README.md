# doge-utils

### What is this?

This was supposed to be a collection of utilities to ease the usage of the DogeHouse API.

It currently only includes a token formatting utility.

### Creating chat tokens

```
import { format } from 'doge-utils'

const unformatted = <anything except recursive object, Symbol, or BigInt>

const formatted_message = format(unformatted);

// formatted message is now an array of valid DogeHouse ChatTokens.
// Array<{ t: string; v: string }>
```

### Interpreting chat tokens

```
import { messageToString } from 'doge-utils'

const tokens = <properly formatted tokens>

const str = messageToString(tokens);

// str is now a String
```

### Real example

```
import { format, messageToString } from 'doge-utils'

const message = [ ['Hello,'], { mention: 'world' } ]; // weirdly formatted message

const tokens = format(message); // [ { t: 'text', v: 'Hello' }, { t: 'mention', v: 'world' } ]

const str = messageToString(tokens); // 'Hello, @world'

messageToString(format(str)) === str // true

format(messageToString(tokens)) === tokens

// false, because it's a different object.
// The shape and values of the object are the same, however.
```
