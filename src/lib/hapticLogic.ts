export const triggerHaptic = (type: 'SELECTION' | 'SUCCESS' | 'WARNING') => {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
        switch (type) {
            case 'SELECTION':
                navigator.vibrate(10); // Light tap
                break;
            case 'SUCCESS':
                navigator.vibrate([10, 30, 20]); // Double tap
                break;
            case 'WARNING':
                navigator.vibrate([30, 50, 30]); // Heavy pulse
                break;
        }
    }
};
