/* ============================================
   RAÍZES DO NORDESTE — Cardápio Logic
   ============================================ */

const products = [
  // Tapiocas
  { id: 1, name: 'Tapioca de Carne de Sol', desc: 'Tapioca recheada com carne de sol desfiada, queijo coalho derretido e manteiga de garrafa.', price: 18.90, category: 'tapiocas', seasonal: false, img: 'https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-tapioca-carne-de-sol.jpg?w=400&h=300&fit=crop', available: true },
  { id: 2, name: 'Tapioca de Frango com Catupiry', desc: 'Tapioca crocante com frango desfiado e cream cheese. Um clássico irresistível.', price: 16.90, category: 'tapiocas', seasonal: false, img: 'https://www.guacira.com.br/images/receitas/0964336001587125272.webp?w=400&h=300&fit=crop', available: true },
  { id: 3, name: 'Tapioca de Banana com Canela', desc: 'Tapioca doce com banana caramelizada, canela e leite condensado.', price: 14.90, category: 'tapiocas', seasonal: false, img: 'https://minhasreceitinhas.com.br/wp-content/uploads/2022/07/Tapioca-de-banana-com-canela.jpg?w=400&h=300&fit=crop', available: true },

  // Cuscuz
  { id: 4, name: 'Cuscuz Recheado Completo', desc: 'Cuscuz nordestino com charque, ovo, queijo coalho e manteiga de garrafa.', price: 22.90, category: 'cuscuz', seasonal: false, img: 'https://www.sabornamesa.com.br/media/k2/items/cache/9f69834c2b52286f136e08fabd62f78b_XL.jpg?w=400&h=300&fit=crop', available: true },
  { id: 5, name: 'Cuscuz Simples com Ovo', desc: 'Cuscuz de milho flocado com ovo frito e manteiga. Café da manhã perfeito.', price: 12.90, category: 'cuscuz', seasonal: false, img: 'https://www.deline.com.br/assets/images/recipes/cuscuz-com-ovo-e-queijo-coalho/mobile/thumb-video.jpg?v3?w=400&h=300&fit=crop', available: true },
  { id: 6, name: 'Cuscuz de São João', desc: 'Cuscuz especial junino com leite de coco, açúcar e canela. Edição limitada!', price: 15.90, category: 'cuscuz', seasonal: true, img: 'https://minhasreceitinhas.com.br/wp-content/uploads/2023/06/1941219_1132757020086957_979951726_n-730x365.jpg?w=400&h=300&fit=crop', available: true },

  // Bolos & Doces
  { id: 7, name: 'Bolo de Macaxeira', desc: 'Bolo cremoso de macaxeira com coco e leite condensado. Receita da vovó.', price: 8.90, category: 'bolos', seasonal: false, img: 'https://s2-receitas.glbimg.com/ZSKdTp-1zK_VVWtYt941vi19r_4=/0x0:1366x768/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2024/g/J/p5YqmIRbiY36Myg4CBQA/bolo-de-macaxeira-de-liquidificador-receita.jpg?w=400&h=300&fit=crop', available: true },
  { id: 8, name: 'Bolo de Rolo', desc: 'Tradicional bolo de rolo pernambucano com goiabada. Fatia generosa.', price: 9.90, category: 'bolos', seasonal: false, img: 'https://moinhoglobo.com.br/wp-content/uploads/2015/06/78-Bolo-de-rolo.jpeg?w=400&h=300&fit=crop', available: true },
  { id: 9, name: 'Pamonha Doce', desc: 'Pamonha de milho verde com açúcar e canela. Especial período junino!', price: 7.90, category: 'bolos', seasonal: true, img: 'https://guiadacozinha.com.br/wp-content/uploads/2019/11/pamonha-recheada-40172.jpg?w=400&h=300&fit=crop', available: true },
  { id: 10, name: 'Canjica Nordestina', desc: 'Canjica cremosa com leite de coco, amendoim e canela. Sabor de festa!', price: 10.90, category: 'bolos', seasonal: true, img: 'https://levementenacozinha.com.br/wp-content/uploads/2022/08/IMG_4547-scaled-e1662046571347.jpg?w=400&h=300&fit=crop', available: true },

  // Sucos & Bebidas
  { id: 11, name: 'Suco de Cajá', desc: 'Suco natural de cajá, fruta típica do nordeste. Refrescante e nutritivo.', price: 8.90, category: 'sucos', seasonal: false, img: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&h=300&fit=crop', available: true },
  { id: 12, name: 'Suco de Acerola', desc: 'Suco natural de acerola, rico em vitamina C. Energia pura!', price: 7.90, category: 'sucos', seasonal: false, img: 'https://totalpass.com/wp-content/uploads/2025/11/Suco-de-acerola.jpg?w=400&h=300&fit=crop', available: true },
  { id: 13, name: 'Quentão Nordestino', desc: 'Bebida quente especial de São João com gengibre, canela e cravo.', price: 9.90, category: 'sucos', seasonal: true, img: 'https://conteudo.imguol.com.br/c/entretenimento/be/2020/06/11/quentao-nasceu-de-um-improviso-e-conquistou-para-sempre-os-apaixonados-por-festas-juninas-1591903528330_v2_4x3.jpg?w=400&h=300&fit=crop', available: true },

  // Cafés da Manhã
  { id: 14, name: 'Café da Manhã Sertanejo', desc: 'Cuscuz, ovo, charque, queijo coalho, tapioca, café e suco. Completo!', price: 32.90, category: 'cafes', seasonal: false, img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop', available: true },
  { id: 15, name: 'Café da Manhã Litorâneo', desc: 'Tapioca, frutas tropicais, suco de cajá, bolo e café coado.', price: 28.90, category: 'cafes', seasonal: false, img: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=400&h=300&fit=crop', available: true },
  { id: 16, name: 'Café Expresso Especial', desc: 'Café 100% arábica do sertão, torrado artesanalmente. Puro sabor.', price: 6.90, category: 'cafes', seasonal: false, img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop', available: true },

  // Salgados
  { id: 17, name: 'Acarajé Baiano', desc: 'Acarajé crocante com vatapá, caruru e camarão seco. Autêntico!', price: 14.90, category: 'salgados', seasonal: false, img: 'https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/acaraje-1920w.jpg?w=400&h=300&fit=crop', available: true },
  { id: 18, name: 'Pastel de Carne de Sol', desc: 'Pastel frito na hora com recheio de carne de sol e queijo.', price: 11.90, category: 'salgados', seasonal: false, img: 'https://obagastronomia.com.br/wp-content/uploads/2016/02/Pastel-de-ab%C3%B3bora-carne-de-sol-e-pupunha-1.jpg?w=400&h=300&fit=crop', available: true },
];

let currentCategory = 'all';

function setCategory(category) {
  currentCategory = category;
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  filterProducts();
}

function filterProducts() {
  const search = document.getElementById('searchInput').value.toLowerCase();
  const seasonal = document.getElementById('seasonalFilter').checked;

  let filtered = products.filter(p => {
    const matchCategory = currentCategory === 'all' || p.category === currentCategory;
    const matchSearch = !search || p.name.toLowerCase().includes(search) || p.desc.toLowerCase().includes(search);
    const matchSeasonal = !seasonal || p.seasonal;
    return matchCategory && matchSearch && matchSeasonal;
  });

  renderProducts(filtered);
}

function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  const empty = document.getElementById('emptyState');

  if (list.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  grid.innerHTML = list.map(p => `
    <div class="product-card animate-in" style="position:relative; cursor:pointer;" onclick="openProductModal(${p.id})">
      ${p.seasonal ? '<span class="seasonal-tag">🎉 Junino</span>' : ''}
      <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy">
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-footer">
          <div class="product-price">${formatCurrency(p.price)}</div>
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); Cart.addItem({id:${p.id}, name:'${p.name.replace(/'/g, "\\'")}', price:${p.price}, img:'${p.img}'})">
            + Adicionar
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Product Modal
let modalQty = 1;

function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  modalQty = 1;

  const overlay = document.createElement('div');
  overlay.className = 'product-modal-overlay active';
  overlay.id = 'productModal';
  overlay.onclick = (e) => { if (e.target === overlay) closeProductModal(); };
  overlay.innerHTML = `
    <div class="product-modal">
      <img src="${p.img}" alt="${p.name}" class="product-modal-img">
      <div class="product-modal-body">
        <h3>${p.name}</h3>
        ${p.seasonal ? '<span class="badge badge-warning mb-md" style="display:inline-flex">🎉 Edição Junina</span>' : ''}
        <p class="desc">${p.desc}</p>
        <div class="price-row">
          <span class="modal-price" id="modalPrice">${formatCurrency(p.price)}</span>
          <div class="qty-control">
            <button onclick="changeModalQty(-1, ${p.price})">−</button>
            <span class="qty-value" id="modalQty">1</span>
            <button onclick="changeModalQty(1, ${p.price})">+</button>
          </div>
        </div>
        <div class="product-modal-actions">
          <button class="btn btn-primary btn-full" onclick="addFromModal(${p.id}, '${p.name.replace(/'/g, "\\'")}', ${p.price}, '${p.img}')">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => modal.remove(), 300);
    document.body.style.overflow = '';
  }
}

function changeModalQty(delta, price) {
  modalQty = Math.max(1, modalQty + delta);
  document.getElementById('modalQty').textContent = modalQty;
  document.getElementById('modalPrice').textContent = formatCurrency(price * modalQty);
}

function addFromModal(id, name, price, img) {
  for (let i = 0; i < modalQty; i++) {
    const items = Cart.getItems();
    const existing = items.find(x => x.id === id);
    if (existing) {
      existing.qty += 1;
      Cart.saveItems(items);
    } else {
      Cart.addItem({ id, name, price, img });
    }
  }
  if (modalQty > 1) Toast.show(`${modalQty}x ${name} adicionado(s)!`, 'success');
  closeProductModal();
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  const unit = localStorage.getItem('raizes_unit');
  document.getElementById('unitLabel').textContent = unit ? `📍 ${unit}` : '📍 Selecione uma unidade na página inicial';
  renderProducts(products);
});
