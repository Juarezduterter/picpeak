import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Home } from 'lucide-react';
import DOMPurify from 'dompurify';
import { Loading, Card } from '../../components/common';
import { cmsService } from '../../services/cms.service';
import { api } from '../../config/api';
import { useForcePublicFrench } from '../../hooks/useForcePublicFrench';
import '../../styles/prose-overrides.css';

export const LegalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  useForcePublicFrench();
  
  // Extract page slug from pathname if not in params (for static routes like /impressum)
  const pathname = window.location.pathname;
  const pageSlug = slug || pathname.split('/').pop() || '';
  
  // Fetch settings to get default language
  const { data: settingsData } = useQuery({
    queryKey: ['public-settings'],
    queryFn: async () => {
      const response = await api.get('/public/settings');
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  const lang = 'fr';

  // Fetch page content
  const { data: page, isLoading, error } = useQuery({
    queryKey: ['legal-page', pageSlug, lang],
    queryFn: () => cmsService.getPublicPage(pageSlug, lang),
    enabled: !!pageSlug && pageSlug !== '' && !!settingsData,
  });

  // Update page title
  useEffect(() => {
    if (page?.title) {
      document.title = `${page.title} - PicPeak`;
    }
  }, [page?.title]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <Loading size="lg" text={t('common.loading')} />
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <div className="text-center py-12 px-6">
            <h2 className="text-xl font-semibold mb-2">{t('errors.notFound')}</h2>
            <p className="text-neutral-600 mb-6">
              {t('errors.pageNotFoundMessage', 'La page que vous recherchez n’existe pas.')}
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700"
            >
              <Home className="w-4 h-4" />
              {t('errors.goToHomepage')}
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200">
        <div className="container py-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('common.back')}
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="container py-12">
        <div className="max-w-4xl mx-auto">
          <Card padding="lg">
            <h1 className="text-3xl font-bold text-neutral-900 mb-8">{page.title}</h1>
            
            <div 
              className="prose prose-neutral max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: DOMPurify.sanitize(page.content, {
                  ALLOWED_TAGS: [
                    'p', 'br', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                    'ul', 'ol', 'li', 'blockquote', 'a', 'em', 'strong',
                    'code', 'pre', 'hr', 'div', 'span'
                  ],
                  ALLOWED_ATTR: ['href', 'target', 'rel', 'class', 'style'],
                  ALLOW_DATA_ATTR: false,
                  KEEP_CONTENT: true,
                  ADD_TAGS: ['br'], // Explicitly allow br tags
                  ADD_ATTR: ['style'], // Allow style for text alignment
                })
              }}
            />
            
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 border-t border-neutral-200">
        <div className="container text-center">
          <div className="flex justify-center gap-4 text-sm">
            <Link
              to="/impressum"
              className="text-neutral-600 hover:text-neutral-900"
            >
              {t('legal.impressum')}
            </Link>
            <span className="text-neutral-400">•</span>
            <Link
              to="/datenschutz"
              className="text-neutral-600 hover:text-neutral-900"
            >
              {t('legal.datenschutz')}
            </Link>
          </div>
          <p className="text-sm text-neutral-500 mt-4">
            © {new Date().getFullYear()} PicPeak. {t('gallery.allRightsReserved')}.
          </p>
        </div>
      </footer>
    </div>
  );
};
