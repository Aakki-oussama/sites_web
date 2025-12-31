import React, { Component, type ReactNode } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

/**
 * ErrorBoundary - Capture les erreurs JavaScript dans les composants enfants
 * Affiche un message d'erreur convivial au lieu d'une page blanche
 */
export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error: Error): State {
        // Mettre à jour l'état pour afficher l'UI d'erreur
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Logger l'erreur pour le débogage (en production, envoyer à un service de logging)
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Afficher le fallback personnalisé ou l'UI d'erreur par défaut
            if (this.props.fallback) {
                return this.props.fallback;
            }

            // UI d'erreur par défaut
            return (
                <div className="min-h-screen flex items-center justify-center bg-light dark:bg-dark-bg px-6">
                    <div className="max-w-md w-full text-center">
                        <div className="mb-6">
                            <h1 className="text-2xl font-black text-brand dark:text-white mb-2">
                                Oups !
                            </h1>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Une erreur s'est produite dans cette section.
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-500 italic">
                                Notre équipe est en train de corriger le problème. Veuillez réessayer plus tard ou recharger la page.
                            </p>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

