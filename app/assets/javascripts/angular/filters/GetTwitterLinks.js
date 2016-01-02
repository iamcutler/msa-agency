export default function GetTwitterLinks($sce) {
    return (input) => {
        let exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

        // Link
        input = input.replace(exp, "<a href='$1' target='_blank'>$1</a>");
        // Hashtag
        exp = /(^|\s)#(\w+)/g;
        input = input.replace(exp, "$1<a href='https://twitter.com/hashtag/$2?src=hash' target='_blank'>#$2</a>");
        // Username
        exp = /(^|\s)@(\w+)/g;
        input = input.replace(exp, "$1<a href='http://www.twitter.com/$2' target='_blank'>@$2</a>");

        return $sce.trustAsHtml(input);
    }
}

GetTwitterLinks.$inject = ['$sce'];
