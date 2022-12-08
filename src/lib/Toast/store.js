import { writable } from "svelte/store";

export const toasts = writable([]);

export const addToast = (toast) => {
    const id = Math.floor(Math.random() * 10000);
    const defaults = {
        id,
        type: "info",
        dismissible: true,
        timeout: 3000,
    };
    toasts.update((all) => [{ ...defaults, ...toast }, ...all]);
    if (toast.timeout) setTimeout(() => dismissToast(id), toast.timeout);
};

export const dismissToast = (id) => {
    toasts.update((all) => all.filter((t) => t.id !== id));
};
