import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useForcePublicFrench = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== 'fr') {
      i18n.changeLanguage('fr');
    }
  }, [i18n]);
};
