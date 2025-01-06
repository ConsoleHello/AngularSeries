

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class authGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(): boolean {
        const token = localStorage.getItem('angular19');
        if (token) {
            return true; // Allow access
        } else {
            this.router.navigate(['/login']); // Redirect to login
            return false;
        }
    }
}
