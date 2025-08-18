import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css'

import classNames from "classnames";

import { Background, Column, Flex, Meta, opacity, SpacingToken } from "@once-ui-system/core";
import { Footer, Header, RouteGuard, Providers } from '@/components';
import { baseURL, effects, fonts, style, dataStyle, home } from '@/resources';

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}
    >
      <head>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Verificar se estamos no cliente
                  if (typeof window === 'undefined') return;
                  
                  const root = document.documentElement;
                  const defaultTheme = 'system';
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    'solid-style': style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    'viz-style': dataStyle.variant,
                  })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    if (root && value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                  
                  // Resolve theme - com verificações de segurança
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      try {
                        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                      } catch (e) {
                        return 'light'; // fallback seguro
                      }
                    }
                    return themeValue;
                  };
                  
                  // Apply saved theme com verificação de localStorage
                  let savedTheme;
                  try {
                    savedTheme = localStorage.getItem('data-theme');
                  } catch (e) {
                    savedTheme = null; // fallback se localStorage não estiver disponível
                  }
                  
                  const resolvedTheme = resolveTheme(savedTheme);
                  if (root) {
                    root.setAttribute('data-theme', resolvedTheme);
                  }
                  
                  // Apply any saved style overrides com verificação
                  const styleKeys = Object.keys(config);
                  styleKeys.forEach(key => {
                    try {
                      const value = localStorage.getItem('data-' + key);
                      if (value && root) {
                        root.setAttribute('data-' + key, value);
                      }
                    } catch (e) {
                      // Ignora erros de localStorage
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  // Fallback seguro
                  if (typeof document !== 'undefined' && document.documentElement) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <Providers>
        <Column 
          as="body" 
          background="page" 
          fillWidth 
          style={{minHeight: "100vh"}} 
          margin="0" 
          padding="0" 
          horizontal="center"
          suppressHydrationWarning
        >
          <Background
            position="fixed"
            suppressHydrationWarning
            mask={{
              x: effects.mask.x,
              y: effects.mask.y,
              radius: effects.mask.radius,
              cursor: effects.mask.cursor,
            }}
            gradient={{
              display: effects.gradient.display,
              opacity: effects.gradient.opacity as opacity,
              x: effects.gradient.x,
              y: effects.gradient.y,
              width: effects.gradient.width,
              height: effects.gradient.height,
              tilt: effects.gradient.tilt,
              colorStart: effects.gradient.colorStart,
              colorEnd: effects.gradient.colorEnd,
            }}
            dots={{
              display: effects.dots.display,
              opacity: effects.dots.opacity as opacity,
              size: effects.dots.size as SpacingToken,
              color: effects.dots.color,
            }}
            grid={{
              display: effects.grid.display,
              opacity: effects.grid.opacity as opacity,
              color: effects.grid.color,
              width: effects.grid.width,
              height: effects.grid.height,
            }}
            lines={{
              display: effects.lines.display,
              opacity: effects.lines.opacity as opacity,
              size: effects.lines.size as SpacingToken,
              thickness: effects.lines.thickness,
              angle: effects.lines.angle,
              color: effects.lines.color,
            }}
          />
          <Flex fillWidth minHeight="16" hide="s" suppressHydrationWarning />
          <Header />
          <Flex
            zIndex={0}
            fillWidth
            padding="l"
            horizontal="center"
            flex={1}
            suppressHydrationWarning
          >
            <Flex horizontal="center" fillWidth minHeight="0">
              <RouteGuard>
                {children}
              </RouteGuard>
            </Flex>
          </Flex>
          <Footer />
        </Column>
      </Providers>
    </Flex>
  );
}