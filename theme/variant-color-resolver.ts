import { createTheme, defaultVariantColorsResolver, VariantColorsResolver } from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);

  if (input.variant === 'primary') {
    return {
      background: 'var(--mantine-color-purple-5)',
      hover: 'var(--mantine-color-purple-4)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

export const themeWithVariantColorResolver = createTheme({ variantColorResolver });
