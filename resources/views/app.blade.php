<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        {{-- Inline script to detect system dark mode preference and apply it immediately --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Inline style to set the HTML background color based on our theme in app.css --}}
        <style>
            html {
                background-color: oklch(1 0 0);
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        {{-- SEO Meta Tags - Open Graph pour le partage social (HTML initial pour les robots) --}}
        @if(request()->is('/'))
            @php
                // URL dynamique : s'adapte automatiquement (localhost ou production)
                $baseUrl = request()->getSchemeAndHttpHost();
                $ogImage = $baseUrl . '/images/avif/seo/brand.png';
            @endphp

            <meta name="description" content="Ecolaundry - Pressing éco-responsable à Meknès. Services de lavage, nettoyage de tapis, repassage de luxe et livraison à domicile. Excellence du soin textile depuis Meknès." />
            <meta name="keywords" content="pressing Meknès, lavage Meknès, nettoyage tapis Meknès, repassage Meknès, livraison Meknès, pressing écologique, pressing éco-responsable, nettoyage à sec Meknès, blanchisserie Meknès, service de pressing, collecte et livraison Meknès" />
            
            {{-- Canonical URL --}}
            <link rel="canonical" href="{{ $baseUrl }}" />
            
            {{-- Open Graph Tags --}}
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="fr_MA" />
            <meta property="og:site_name" content="Ecolaundry" />
            <meta property="og:title" content="Ecolaundry - Pressing Éco-Responsable à Meknès" />
            <meta property="og:description" content="Service de blanchisserie premium à Meknès. Lavage au kilo à partir de 15 DH/kg, nettoyage de tapis, repassage de luxe et livraison à domicile. Collecte express en moins de 60 minutes." />
            <meta property="og:url" content="{{ $baseUrl }}" />
            <meta property="og:image" content="{{ $ogImage }}" />
            <meta property="og:image:alt" content="Ecolaundry - Service de pressing éco-responsable à Meknès" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            
            {{-- JSON-LD Structured Data --}}
            @php
                $structuredData = [
                    '@context' => 'https://schema.org',
                    '@type' => 'LocalBusiness',
                    '@id' => $baseUrl . '/#organization',
                    'name' => 'Ecolaundry',
                    'alternateName' => 'Ecolaundry Meknès',
                    'description' => 'Ecolaundry - Pressing éco-responsable à Meknès. Services de lavage, nettoyage de tapis, repassage de luxe et livraison à domicile. Excellence du soin textile depuis Meknès.',
                    'url' => $baseUrl,
                    'logo' => $baseUrl . '/images/logo.png',
                    'image' => $ogImage,
                    'priceRange' => '15 DH - 100 DH',
                    'telephone' => '+212664755026',
                    'email' => 'contact@ecolaundry.ma',
                    'address' => [
                        '@type' => 'PostalAddress',
                        'streetAddress' => 'Ave Zitoune',
                        'addressLocality' => 'Meknès',
                        'postalCode' => '50000',
                        'addressCountry' => 'MA',
                        'addressRegion' => 'Fès-Meknès'
                    ],
                    'geo' => [
                        '@type' => 'GeoCoordinates',
                        'latitude' => '33.8582317',
                        'longitude' => '-5.5762441'
                    ],
                    'openingHoursSpecification' => [
                        [
                            '@type' => 'OpeningHoursSpecification',
                            'dayOfWeek' => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
                            'opens' => '9:00',
                            'closes' => '21:00'
                        ]
                    ],
                    'hasOfferCatalog' => [
                        '@type' => 'OfferCatalog',
                        'name' => 'Services de Blanchisserie',
                        'itemListElement' => [
                            [
                                '@type' => 'Offer',
                                'itemOffered' => [
                                    '@type' => 'Service',
                                    'name' => 'Lavage au Kilo',
                                    'description' => 'Service de lavage professionnel au kilo avec produits écologiques'
                                ]
                            ],
                            [
                                '@type' => 'Offer',
                                'itemOffered' => [
                                    '@type' => 'Service',
                                    'name' => 'Nettoyage de Tapis',
                                    'description' => 'Nettoyage professionnel de tapis et moquettes'
                                ]
                            ],
                            [
                                '@type' => 'Offer',
                                'itemOffered' => [
                                    '@type' => 'Service',
                                    'name' => 'Repassage de Luxe',
                                    'description' => 'Service de repassage professionnel pour tous types de vêtements'
                                ]
                            ],
                            [
                                '@type' => 'Offer',
                                'itemOffered' => [
                                    '@type' => 'Service',
                                    'name' => 'Livraison à Domicile',
                                    'description' => 'Collecte et livraison express à domicile à Meknès'
                                ]
                            ]
                        ]
                    ],
                    'sameAs' => [
                        'https://www.facebook.com/ecolaundrymeknes/',
                        'https://www.instagram.com/eco_laundry22/'
                    ],
                    'areaServed' => [
                        '@type' => 'City',
                        'name' => 'Meknès',
                        'containedIn' => [
                            '@type' => 'Country',
                            'name' => 'Morocco'
                        ]
                    ]
                ];
            @endphp
            <script type="application/ld+json">{!! json_encode($structuredData, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) !!}</script>
        @endif

        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">

        {{-- Fonts web désactivées pour éviter layout shift --}}
        {{-- <link rel="preconnect" href="https://fonts.bunny.net"> --}}
        {{-- <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600&display=optional" rel="stylesheet" /> --}}

        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
