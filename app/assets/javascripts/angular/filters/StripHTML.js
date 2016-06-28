export default function StripHTML() {
    return (input) => {
        return String(input).replace(/<[^>]+>/gm, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
    }
}
