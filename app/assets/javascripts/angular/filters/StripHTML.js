export default function StripHTML() {
    return (input) => {
        return input.replace(/<\/?[^>]+>/gi, '').replace('&nbsp;', '');
    }
}
