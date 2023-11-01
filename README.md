# React Read Progress Component

The React Read Progress Component is a customizable React component that allows you to display the progress of reading a page. It provides a visual indicator to users, showing them how much of the page they have scrolled through.

## Features

- **Easy Integration**: The component can be easily integrated into any React application.
- **Customizable**: You can customize the appearance and behavior of the progress indicator to match the design of your application.
- **Responsive**: The component is responsive and works well on different screen sizes and devices.
- **Scroll Detection**: The component automatically detects scroll events and updates the progress indicator accordingly.
- **Scroll Offset**: You can specify a scroll offset to account for any fixed headers or footers in your application.


## Installation

You can install the React Read Progress Component using npm or yarn:

```shell
npm install readprogress
```



## Usage

To use the React Read Progress Component in your React application, import it and include it in your component's render method. Here's an example:

```jsx
import React from 'react';
import ReadProgress from 'readprogress';

export default function MyComponent{
    return (
      <div>
       <ReadProgress />
        {/* Rest of your page content */}
      </div>
    );
  
}
```

 You can customize the appearance of the indicator by passing props to the `ReadProgress` component. Here are some examples:

```jsx
<ReadProgress
  color="#ff0000"
  height={4}
  scrollOffset={100}
  
  
/>
```

In the example above, the progress indicator will have a red color, a height of 4 pixels, and will be displayed at the bottom of the page. The scroll offset of 100 pixels will be taken into account when calculating the progress.

## Props

The React Read Progress Component accepts the following props:

- **color** (string): The color of the progress indicator. Defaults to "#ff0000" (black).
- **height** (number): The height of the progress indicator in pixels. Defaults to 4.
- **scrollOffset** (number): The scroll offset in pixels. This value will be subtracted from the scroll position when calculating the progress. Defaults to 0.
- **zIndex** (number): Defaults to 999

## Contributing

Contributions to the React Read Progress Component are welcome! If you find a bug or have a feature request, please open an issue on the [GitHub repository](https://github.com/co-bby/Read-Progress). If you'd like to contribute code, please fork the repository and submit a pull request.

## License

2023 MIT © [Cobby](https://github.com/co-bby).







