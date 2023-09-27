import { Subscription } from "rxjs";

export const unsubscribe = (subs: Subscription[]) => subs.forEach(s => s.unsubscribe());