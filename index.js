export default function isSrcsetAttribute(value) {
    if (typeof value !== 'string') return false;
    const parts = value.split(',');
    for (const part of parts) {
        const urlPart = part.trim();
        const widthPart = urlPart.split('x')[0];
        if (
            (!widthPart && urlPart.length > 0) ||
            (widthPart && !isNaN(parseFloat(widthPart))) ||
            (urlPart.startsWith('http') && !urlPart.startsWith('https'))
        ) {
            return false;
        }
    }
    return true;
}