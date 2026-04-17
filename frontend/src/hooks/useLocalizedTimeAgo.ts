import { useTranslation } from 'react-i18next';

export const useLocalizedTimeAgo = () => {
  const { i18n } = useTranslation();
  
  const formatTimeAgo = (date: Date | string): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    const now = new Date();
    const seconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);
    
    const isGerman = i18n.language === 'de';
    const isFrench = i18n.language === 'fr';
    
    // Less than a minute
    if (seconds < 60) {
      if (isFrench) return 'à l’instant';
      return isGerman ? 'gerade eben' : 'just now';
    }
    
    // Minutes
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      if (minutes === 1) {
        if (isFrench) return 'il y a 1 minute';
        return isGerman ? 'vor 1 Minute' : '1 minute ago';
      }
      if (isFrench) return `il y a ${minutes} minutes`;
      return isGerman ? `vor ${minutes} Minuten` : `${minutes} minutes ago`;
    }
    
    // Hours
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      if (hours === 1) {
        if (isFrench) return 'il y a 1 heure';
        return isGerman ? 'vor 1 Stunde' : '1 hour ago';
      }
      if (isFrench) return `il y a ${hours} heures`;
      return isGerman ? `vor ${hours} Stunden` : `${hours} hours ago`;
    }
    
    // Days
    const days = Math.floor(hours / 24);
    if (days < 7) {
      if (days === 1) {
        if (isFrench) return 'il y a 1 jour';
        return isGerman ? 'vor 1 Tag' : '1 day ago';
      }
      if (isFrench) return `il y a ${days} jours`;
      return isGerman ? `vor ${days} Tagen` : `${days} days ago`;
    }
    
    // Weeks
    const weeks = Math.floor(days / 7);
    if (weeks < 4) {
      if (weeks === 1) {
        if (isFrench) return 'il y a 1 semaine';
        return isGerman ? 'vor 1 Woche' : '1 week ago';
      }
      if (isFrench) return `il y a ${weeks} semaines`;
      return isGerman ? `vor ${weeks} Wochen` : `${weeks} weeks ago`;
    }
    
    // Months
    const months = Math.floor(days / 30);
    if (months < 12) {
      if (months === 1) {
        if (isFrench) return 'il y a 1 mois';
        return isGerman ? 'vor 1 Monat' : '1 month ago';
      }
      if (isFrench) return `il y a ${months} mois`;
      return isGerman ? `vor ${months} Monaten` : `${months} months ago`;
    }
    
    // Years
    const years = Math.floor(days / 365);
    if (years === 1) {
      if (isFrench) return 'il y a 1 an';
      return isGerman ? 'vor 1 Jahr' : '1 year ago';
    }
    if (isFrench) return `il y a ${years} ans`;
    return isGerman ? `vor ${years} Jahren` : `${years} years ago`;
  };
  
  return { formatTimeAgo };
};
