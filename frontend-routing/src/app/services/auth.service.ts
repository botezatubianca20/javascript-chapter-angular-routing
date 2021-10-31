import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/IUser';
import { map, shareReplay, tap } from 'rxjs/operators';

const AUTH_DATA = "auth_data";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private subject = new BehaviorSubject<IUser | null>(null);

    user$: Observable<IUser | null> = this.subject.asObservable();

    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;
    isAdmin$: Observable<boolean | null>;

    constructor(private http: HttpClient) {

        this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
        this.isAdmin$ = this.user$.pipe(map(user => user && user.admin));

        this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));

        const user = localStorage.getItem(AUTH_DATA);

        if (user) {
            this.subject.next(JSON.parse(user));
        }

    }

    login(email: string, password: string): Observable<IUser> {
        return this.http.post<IUser>("http://localhost:3000/api/login", { email, password })
            .pipe(
                tap(user => {
                    this.subject.next(user);
                    localStorage.setItem(AUTH_DATA, JSON.stringify(user));
                }),
                shareReplay()
            );
    }

    logout() {
        this.subject.next(null);
        localStorage.removeItem(AUTH_DATA);
    }
}
