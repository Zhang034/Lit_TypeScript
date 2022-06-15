import { AuthorizationService } from './authorization-service';
export class AuthGuard {
    constructor() {
        this.authService = new AuthorizationService();
    }
    async pageEnabled(context, commands, pathRedirect) {
        const isAuthenticated = await this.authService.isAuthorized();
        if (!isAuthenticated) {
            console.warn('User not authorized', context.pathname);
            return commands.redirect(pathRedirect ? pathRedirect : '/');
        }
        return undefined;
    }
}
export async function authGuard(context, commands) {
    const isAuthenticated = await new AuthorizationService().isAuthorized();
    if (!isAuthenticated) {
        console.warn('User not authorized', context.pathname);
        return commands.redirect('/');
    }
    return undefined;
}
//# sourceMappingURL=auth-guard.js.map