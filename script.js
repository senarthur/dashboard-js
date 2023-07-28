const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggle');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelectorAll('span').forEach((sp) => {
        sp.classList.toggle('active');
    })
})

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = ` <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Recusado' ? 
                            'danger' : 
                            order.shipping === 'Pendente' ?
                            'warning' : 'primary'}">${order.shipping}</td>
                        <td class="primary">Detalhes</td>`;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})