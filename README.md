# @scrycollective/react-splitter-layout

[![Build Status](https://travis-ci.org/scrycollective/react-splitter-layout.svg?branch=master)](https://travis-ci.org/scrycollective/react-splitter-layout)
[![npm version](https://badge.fury.io/js/@scrycollective/react-splitter-layout.svg)](https://badge.fury.io/js/@scrycollective/react-splitter-layout)
[![devDependency Status](https://david-dm.org/scrycollective/react-splitter-layout/dev-status.svg)](https://david-dm.org/scrycollective/react-splitter-layout#info=devDependencies)

React-splitter-layout is a simple split layout for React and modern browsers by
Yang Liu (aka zesik).

The Scry Collective fork adds one feature, and has a focus on keeping all
dependencies at the latest versions, at the expense of supporting a wide range
of React versions.

[Demo](https://scrycollective.github.io/react-splitter-layout/)

## Dependencies

@scrycollective/react-splitter-layout depends on the latest version of React.
See [package.json](package.json) for more details.

## Installation

```sh
$ yarn add @scrycollective/react-splitter-layout
```

## Testing

To run tests, execute `test` command with `yarn`: .

```sh
$ yarn test
```

To run coverage tests, execute `coverage` script with `yarn`.

```sh
$ yarn coverage
```

## Integration

1. Add `react-splitter-layout` dependency to your code.

    ```sh
    $ yarn add @scrycollective/react-splitter-layout
    ```

2. Include the library into your code and use it.

    ```javascript
    import React from 'react'
    import SplitterLayout from '@scrycollective/react-splitter-layout'

    class YourComponent extends React.Component {
      render() {
        return (
          <SplitterLayout>
            <div>Pane 1</div>
            <div>Pane 2</div>
          </SplitterLayout>
        );
      }
    }

    export default YourComponent
    ```

## Usage

Write two parts of the layout as direct children of your `SplitterLayout` element.
`SplitterLayout` renders the first 2 direct children only if it has more than 2 direct children.
`SplitterLayout` does not render splitter when it has only 1 direct children,
and the only direct children occupies all available space.

The `SplitterLayout` component supports the following props.

* `customClassName: PropTypes.string`

    Custom CSS class name applied to the layout `div`. You can use this to customize layout style.
    Refers to the [original stylesheet](src/stylesheets/index.css) to see what you can customize.

* `vertical: PropTypes.bool`

    Determine whether the layout should be a horizontal split or a vertical split. The default value is `false`.

* `percentage: PropTypes.bool`

    Determine whether the width of each pane should be calculated in percentage or by pixels.
    The default value is `false`, which means width is calculated in pixels.

* `primaryIndex: PropTypes.number`

    Index of the *primary pane*. Since `SplitterLayout` supports at most 2 children, only `0` or `1` is allowed.
    The default value is `0`.

    A *primary pane* is used to show users primary content, while a *secondary pane* is the other pane.
    When window size changes and `percentage` is set to `false`,
    primary pane's size is flexible and secondary pane's size is kept unchanged.
    However, when the window size is not enough for showing both minimal primary pane and minimal secondary pane,
    the primary pane's size is served first.

* `primaryMinSize: PropTypes.number`

    Minimal size of primary pane. The default value is 0.

    When `percentage` is set to `false`, this value is pixel size (25 means 25px).
    When `percentage` is set to `true`, this value is percentage (25 means 25%).

* `secondaryMinSize: PropTypes.number`

    Minimal size of secondary pane.

* `secondaryInitialSize: PropTypes.number`

    Initial size of secondary pane when page loads.

    If this prop is not defined, `SplitterLayout` tries to split the layout with equal sizes.
    (Note: equal size may not apply when there are nested layouts.)

* `onSecondarySizeChange: PropTypes.func`

    Optional callback function which receives one parameter of type number. It
    is called when the SplitterLayout component is first mounted, and again
    whenever the user finishes moving the splitter.

    The purpose of this callback is to provide the ability to save a user
    positioned splitter as part of an applications state. It is then possible to
    restore the position using the `secondaryInitialSize` property. For those
    using the flow type library, the signature for the callback is
    `( secondarySize: number ) => void`.

## Release History

* 1.0.0
  * Drop support for React prior to 15.5.4, upgrade all dependencies to latest.
      Since this is not a backwards compatible change, that is why the version
      had to go up a major version.
  * Add onSecondarySizeChange callback, to allow saving the splitter position in
    the store.
* 0.2.1
  * Fix an incorrect layout when nesting a horizontal splitter inside a vertical one,
    and now root element of the splitter is absolutely positioned.
* 0.1.0
  * First proper release.

## License

[MIT](LICENSE)
