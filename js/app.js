const FALLBACK_PRODUCTS = [{"sku": "BB-SP-60", "name": "BodyBright กลิ่น Sport (ขนาดเล็ก 60 กรัม)", "scent": "Sport", "size": "60g", "price": 59, "image": "assets/sport.jpg", "tag": "พกพาสะดวก", "description": "สบู่ก้อนขนาดพกพา มอบความเย็นสบายและกลิ่นหอมสดชื่นทุกที่ทุกเวลา", "pick_components": [{"base_sku": "RAW-SP-60", "label": "สบู่ Sport 60g", "qty": 1}]}, {"sku": "BB-SP-130", "name": "BodyBright กลิ่น Sport (ขนาดใหญ่ 130 กรัม)", "scent": "Sport", "size": "130g", "price": 119, "image": "assets/sport.jpg", "tag": "ขายดี", "description": "สบู่ก้อนใหญ่ใช้ได้นาน ชำระล้างสิ่งสกปรกพร้อมปลุกความสดชื่นเต็มพิกัดในทุกการอาบน้ำ", "pick_components": [{"base_sku": "RAW-SP-130", "label": "สบู่ Sport 130g", "qty": 1}]}, {"sku": "BB-PC-60", "name": "BodyBright กลิ่น Peach (ขนาดเล็ก 60 กรัม)", "scent": "Peach", "size": "60g", "price": 59, "image": "assets/peach.jpg", "tag": "พกพาสะดวก", "description": "สบู่พีชขนาดกะทัดรัด พกพาสะดวก เติมความหอมหวานละมุนให้ผิวคุณได้ทุกวัน", "pick_components": [{"base_sku": "RAW-PC-60", "label": "สบู่ Peach 60g", "qty": 1}]}, {"sku": "BB-PC-130", "name": "BodyBright กลิ่น Peach (ขนาดใหญ่ 130 กรัม)", "scent": "Peach", "size": "130g", "price": 119, "image": "assets/peach.jpg", "tag": "ขายดี", "description": "สบู่พีชก้อนใหญ่จุใจ ปรนนิบัติผิวให้เนียนนุ่มพร้อมกลิ่นหอมหวานติดทนนาน", "pick_components": [{"base_sku": "RAW-PC-130", "label": "สบู่ Peach 130g", "qty": 1}]}, {"sku": "BB-SET-DUO60", "name": "เซตคู่หูพกพา BodyBright (60g x 2 - Sport & Peach)", "scent": "Mix", "size": "60g x 2", "price": 110, "image": "assets/sport.jpg", "tag": "เซตคู่สุดคุ้ม", "description": "รวมความสดชื่นและหอมหวานในขนาดพกพา ให้คุณเลือกเปลี่ยนกลิ่นได้ตามอารมณ์", "pick_components": [{"base_sku": "RAW-SP-60", "label": "สบู่ Sport 60g", "qty": 1}, {"base_sku": "RAW-PC-60", "label": "สบู่ Peach 60g", "qty": 1}]}, {"sku": "BB-SET-DUO130", "name": "เซตสุดคุ้มใช้ได้นาน (130g x 2 - Sport & Peach)", "scent": "Mix", "size": "130g x 2", "price": 225, "image": "assets/peach.jpg", "tag": "แนะนำ", "description": "คู่หูสบู่ก้อนใหญ่ที่ตอบโจทย์ทั้งวันลุยๆ และวันสบายๆ ของทุกคนในบ้าน", "pick_components": [{"base_sku": "RAW-SP-130", "label": "สบู่ Sport 130g", "qty": 1}, {"base_sku": "RAW-PC-130", "label": "สบู่ Peach 130g", "qty": 1}]}, {"sku": "BB-SET-SP2", "name": "เซตสดชื่นคูณสอง กลิ่น Sport (60g + 130g)", "scent": "Sport", "size": "60g + 130g", "price": 169, "image": "assets/sport.jpg", "tag": "เซตคู่กลิ่น Sport", "description": "จับคู่ความเย็นสดชื่นทั้งขนาดใช้ที่บ้านและขนาดพกพาไปยิมหรือเดินทาง", "pick_components": [{"base_sku": "RAW-SP-60", "label": "สบู่ Sport 60g", "qty": 1}, {"base_sku": "RAW-SP-130", "label": "สบู่ Sport 130g", "qty": 1}]}, {"sku": "BB-SET-PC2", "name": "เซตหอมหวานคูณสอง กลิ่น Peach (60g + 130g)", "scent": "Peach", "size": "60g + 130g", "price": 169, "image": "assets/peach.jpg", "tag": "เซตคู่กลิ่น Peach", "description": "เติมความหอมละมุนของพีชได้ต่อเนื่อง ทั้งก้อนใหญ่ในห้องน้ำและก้อนเล็กในกระเป๋าเดินทาง", "pick_components": [{"base_sku": "RAW-PC-60", "label": "สบู่ Peach 60g", "qty": 1}, {"base_sku": "RAW-PC-130", "label": "สบู่ Peach 130g", "qty": 1}]}, {"sku": "BB-SET-TRY4", "name": "เซตทดลองสุดคุ้ม BodyBright (60g x 4 คละกลิ่น)", "scent": "Mix", "size": "60g x 4", "price": 215, "image": "assets/peach.jpg", "tag": "สุดคุ้ม", "description": "รวมสบู่ขนาดเล็ก 4 ก้อน ให้คุณทดลองสัมผัสทั้งความสดชื่นและหอมหวานในราคาสบายกระเป๋า", "pick_components": [{"base_sku": "RAW-SP-60", "label": "สบู่ Sport 60g", "qty": 2}, {"base_sku": "RAW-PC-60", "label": "สบู่ Peach 60g", "qty": 2}]}, {"sku": "BB-SET-FAM4", "name": "เซตครอบครัว BodyBright Family Pack (130g x 4 คละกลิ่น)", "scent": "Mix", "size": "130g x 4", "price": 439, "image": "assets/sport.jpg", "tag": "Family Pack", "description": "เซตสบู่ก้อนใหญ่สุดคุ้ม ที่รวมทั้งกลิ่น Sport และกลิ่น Peach ไว้ครบจบในกล่องเดียว", "pick_components": [{"base_sku": "RAW-SP-130", "label": "สบู่ Sport 130g", "qty": 2}, {"base_sku": "RAW-PC-130", "label": "สบู่ Peach 130g", "qty": 2}]}];

// Google Apps Script Web App URL (ตั้งค่าได้ในหน้า Admin หรือใส่ลิงก์ตรงนี้)
function getSheetApiUrl() {
  return localStorage.getItem('bb_sheet_api_url') || '';
}

function setSheetApiUrl(url) {
  localStorage.setItem('bb_sheet_api_url', url.trim());
}

async function loadProducts() {
  try {
    // Support both root pages and warehouse/ subfolder
    const prefix = window.location.pathname.includes('/warehouse/') ? '../' : '';
    const res = await fetch(prefix + 'data/products.json');
    if (!res.ok) throw new Error('Fetch failed');
    return await res.json();
  } catch (e) {
    return FALLBACK_PRODUCTS;
  }
}

// Cart Management
function getCart() {
  return JSON.parse(localStorage.getItem('bb_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('bb_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(product) {
  const cart = getCart();
  const existing = cart.find(item => item.sku === product.sku);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart(cart);
  showToast(`เพิ่ม [${product.sku}] ${product.name} ลงตะกร้าแล้ว`);
}

function updateCartBadge() {
  const cart = getCart();
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(el => el.textContent = totalQty);
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// Orders Management (LocalStorage + Google Sheets Sync)
function getOrders() {
  return JSON.parse(localStorage.getItem('bb_orders') || '[]');
}

async function saveOrder(order) {
  const orders = getOrders();
  orders.unshift(order);
  localStorage.setItem('bb_orders', JSON.stringify(orders));
  localStorage.setItem('bb_last_order', JSON.stringify(order));

  const apiUrl = getSheetApiUrl();
  if (apiUrl) {
    try {
      await fetch(apiUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'createOrder', order: order })
      });
    } catch (err) {
      console.error('Google Sheet sync error:', err);
    }
  }
}

async function syncOrdersFromGoogleSheet() {
  const apiUrl = getSheetApiUrl();
  if (!apiUrl) return null;
  try {
    const res = await fetch(`${apiUrl}?action=getOrders`);
    const data = await res.json();
    if (data.status === 'success' && Array.isArray(data.orders)) {
      const mapped = data.orders.map(row => ({
        orderId: row.order_id,
        date: row.order_date,
        customer: {
          name: row.customer_name,
          phone: String(row.phone).replace(/^'/, ''),
          address: row.address,
          payment: row.payment_method
        },
        items: row.items || [],
        subtotal: Number(row.subtotal || 0),
        shipping: Number(row.shipping || 0),
        total: Number(row.total || 0),
        status: row.status || 'รอดำเนินการ'
      }));
      localStorage.setItem('bb_orders', JSON.stringify(mapped));
      return mapped;
    }
  } catch (err) {
    console.error('Failed to fetch from Google Sheet:', err);
  }
  return null;
}

// Expand SKU sets into physical soap bars for Pick & Pack
function calculatePickList(items) {
  const summary = {};
  items.forEach(item => {
    const components = item.pick_components || [{ base_sku: item.sku, label: item.name, qty: 1 }];
    components.forEach(comp => {
      if (!summary[comp.base_sku]) {
        summary[comp.base_sku] = { base_sku: comp.base_sku, label: comp.label, qty: 0 };
      }
      summary[comp.base_sku].qty += comp.qty * item.qty;
    });
  });
  return Object.values(summary);
}

document.addEventListener('DOMContentLoaded', updateCartBadge);
