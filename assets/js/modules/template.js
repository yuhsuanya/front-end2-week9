let number = 0;
export const newsTemplate = news =>`
    <div class="item--${(number++)%6+1}">
    <img src="${news.urlToImage}" alt="newsImage">
    </div>
`;
