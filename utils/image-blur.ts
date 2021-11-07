export const imageBlur = (src: string, quality?: number): string => {
    return `${src}?w=${50}&q=${quality || 75}`;
};
