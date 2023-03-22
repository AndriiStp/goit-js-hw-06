const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listEl = document.querySelector('.gallery');
listEl.style.display = 'flex';
listEl.style.gap = '20px';
listEl.style.listStyle = 'none';

const imgList = images.reduce(
  (img, { url, alt }) =>
    img +
    `<li><img src="${url}" alt="${alt}" style = "width: 320px; height: 200px; border-radius: 10px; border: 1px dashed"></li>`,
  '',
);

listEl.insertAdjacentHTML('beforeend', imgList);
