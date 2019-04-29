let number = 0;
export const newsTemplate = news =>`
    <div class="object--${(number++)%6+1}">
    <img src="${news.urlToImage}" alt="newsImage">
    </div>
`;
