import React, { useMemo } from 'react'
import { useThemeMode } from 'antd-style';

const useTheme = (themeFromProps?: string) => {
  const { isDarkMode } = useThemeMode();
  const theme = useMemo(() => {
    if (themeFromProps) {
      return themeFromProps;
    }
    return isDarkMode ? 'classicDark' : 'classic';
  }, [isDarkMode, themeFromProps]);
  return { theme }
}
export default useTheme