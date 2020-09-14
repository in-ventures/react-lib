module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '../src/config/storybook/muiTheme/register',
    {
      name: '@storybook/addon-storysource',
      options: { loaderOptions: { parser: 'typescript' } },
    },
    '@storybook/addon-backgrounds',
    'storybook-addon-paddings'
  ],
};
